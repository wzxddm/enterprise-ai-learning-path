# 第一阶段工单分诊实验包

这里不是完整产品，而是用来验证“结构正确不等于业务正确”的最小参考答案。

## 文件

- [`schema/ticket-triage.schema.json`](schema/ticket-triage.schema.json)：结构层输出契约。
- [`reference/validator.go`](reference/validator.go)：跨字段业务校验参考实现。
- [`reference/validator_test.go`](reference/validator_test.go)：合法 JSON 但业务错误的测试。
- [`../../../docs/downloads/stage-1/tickets-seed.jsonl`](../../../docs/downloads/stage-1/tickets-seed.jsonl)：20 条中文种子工单和人工标签。
- [`../../../docs/downloads/stage-1/experiment-record.csv`](../../../docs/downloads/stage-1/experiment-record.csv)：20 次重复调用和模型对比记录模板。
- [`../../../docs/downloads/stage-1/prompt-reference.md`](../../../docs/downloads/stage-1/prompt-reference.md)：零样本、规则契约和 Few-shot 三个 Prompt 参考版本。
- [`../../../docs/downloads/stage-1/go-no-go-template.md`](../../../docs/downloads/stage-1/go-no-go-template.md)：上线判断报告模板。

## 运行参考校验器

```bash
cd 01-llm-basics/lab
go test ./...
```

## 推荐完成顺序

1. 先不要看 `reference/`，自己根据 Schema 写业务校验器。
2. 至少构造三条“JSON 合法但业务冲突”的测试。
3. 运行自己的测试后，再对照参考实现。
4. 参考实现只演示分层校验，不代表真实公司的完整业务规则。
