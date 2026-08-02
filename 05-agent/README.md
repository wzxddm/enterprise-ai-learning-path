# 阶段五：Agent、工具调用与工作流

时间：第 13～14 周

## 必学内容

- Tool Schema 和 Tool Calling。
- ReAct 和 Planning。
- Workflow 与 Agent 的区别。
- 状态管理和短期记忆。
- 串行、并行和条件分支。
- 重试、超时、幂等和最大步骤数。
- 人工确认、权限控制和沙箱。
- Prompt Injection 与间接注入。
- MCP 的作用和基本架构。

## 核心资料

### 必读文章

- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)

重点理解 Prompt Chaining、Routing、Parallelization、Orchestrator-Workers 和 Evaluator-Optimizer。

### 官方文档

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP Servers 示例](https://github.com/modelcontextprotocol/servers)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)

## 工程模型

```text
Agent = LLM 决策器
      + 状态机
      + 工具集合
      + 执行循环
      + 权限控制
      + 可观测系统
```

## 实践项目

实现一个代码仓库分析 Agent：

- [ ] 搜索代码并读取文件。
- [ ] 运行测试或只读诊断命令。
- [ ] 对危险操作要求人工确认。
- [ ] 支持工具超时、失败重试和最大步骤限制。
- [ ] 记录每一步推理状态、工具调用、延迟和 Token。
- [ ] 构造工具报错、错误参数和注入攻击测试。

先把单 Agent 做到稳定可控，再考虑多 Agent。

## 阶段验收

能够解释：

- 固定工作流什么时候比 Agent 更合适？
- 如何避免 Agent 无限循环？
- Tool Calling 失败时如何恢复？
- 外部文档中的恶意指令为什么危险？

产出：可观测、可中止、有权限边界的代码 Agent。
