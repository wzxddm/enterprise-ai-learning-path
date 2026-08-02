package reference

import (
	"errors"
	"fmt"
	"slices"
	"strings"
)

type Result struct {
	Summary          string   `json:"summary"`
	Category         string   `json:"category"`
	Subcategory      string   `json:"subcategory"`
	Priority         string   `json:"priority"`
	TargetTeam       string   `json:"target_team"`
	RiskTags         []string `json:"risk_tags"`
	NeedsHumanReview bool     `json:"needs_human_review"`
	ReasonCodes      []string `json:"reason_codes"`
}

var allowedCategoryTeams = map[string][]string{
	"account":     {"identity_platform", "customer_success"},
	"billing":     {"billing_ops"},
	"integration": {"developer_platform"},
	"performance": {"site_reliability"},
	"product":     {"product_ops"},
	"security":    {"security_response"},
	"unknown":     {"customer_success"},
}

// ValidateBusinessRules validates semantic and business consistency after
// JSON Schema validation. A structurally valid model response may still fail here.
func ValidateBusinessRules(result Result) error {
	if strings.TrimSpace(result.Summary) == "" {
		return errors.New("summary is required")
	}

	teams, ok := allowedCategoryTeams[result.Category]
	if !ok {
		return fmt.Errorf("unsupported category %q", result.Category)
	}
	if !slices.Contains(teams, result.TargetTeam) {
		return fmt.Errorf("category %q cannot route to team %q", result.Category, result.TargetTeam)
	}

	if result.Category == "unknown" && !result.NeedsHumanReview {
		return errors.New("unknown category must enter human review")
	}

	highRisk := slices.Contains(result.RiskTags, "production_outage") ||
		slices.Contains(result.RiskTags, "data_leak") ||
		slices.Contains(result.RiskTags, "credential_leak")
	if highRisk && result.Priority != "P1" {
		return errors.New("high-risk ticket must be P1")
	}
	if highRisk && !result.NeedsHumanReview {
		return errors.New("high-risk ticket must enter human review")
	}

	if result.Category == "security" && result.TargetTeam != "security_response" {
		return errors.New("security ticket must route to security_response")
	}
	return nil
}
