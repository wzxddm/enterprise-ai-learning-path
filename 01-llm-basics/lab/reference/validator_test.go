package reference

import "testing"

func TestValidateBusinessRules(t *testing.T) {
	tests := []struct {
		name    string
		result  Result
		wantErr bool
	}{
		{
			name:   "valid production outage",
			result: Result{Summary: "all users cannot sign in", Category: "account", Subcategory: "login_failure", Priority: "P1", TargetTeam: "identity_platform", RiskTags: []string{"production_outage"}, NeedsHumanReview: true, ReasonCodes: []string{"MULTIPLE_USERS_AFFECTED"}},
		},
		{
			name:    "schema-valid but wrong priority",
			result:  Result{Summary: "all users cannot sign in", Category: "account", Subcategory: "login_failure", Priority: "P3", TargetTeam: "identity_platform", RiskTags: []string{"production_outage"}, NeedsHumanReview: true, ReasonCodes: []string{"MULTIPLE_USERS_AFFECTED"}},
			wantErr: true,
		},
		{
			name:    "unknown without human review",
			result:  Result{Summary: "unclear error", Category: "unknown", Subcategory: "insufficient_information", Priority: "P3", TargetTeam: "customer_success", NeedsHumanReview: false, ReasonCodes: []string{"INSUFFICIENT_INFORMATION"}},
			wantErr: true,
		},
		{
			name:    "security routed to normal support",
			result:  Result{Summary: "credential exposed", Category: "security", Subcategory: "credential_exposure", Priority: "P1", TargetTeam: "customer_success", RiskTags: []string{"credential_leak"}, NeedsHumanReview: true, ReasonCodes: []string{"SECRET_EXPOSED"}},
			wantErr: true,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			err := ValidateBusinessRules(test.result)
			if (err != nil) != test.wantErr {
				t.Fatalf("ValidateBusinessRules() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}
