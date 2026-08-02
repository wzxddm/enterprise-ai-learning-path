# 第一阶段中文资料与事实来源

更新时间：2026-08-02

本阶段只使用中文学习入口。详细的七阶段总顺序见[七阶段中文资料学习顺序](../resources/chinese-roadmap.md)。

## 必读顺序

资料必须配合[可执行学习单](workbook.md)使用；不要先把所有内容看完，再思考能做什么。

### 第 1 步：建立企业应用地图

- [阿里云百炼：什么是模型服务平台百炼](https://help.aliyun.com/zh/model-studio/what-is-model-studio)
- 难度：入门。
- 只学：模型、API、应用编排、企业平台和业务系统之间的关系。
- 产出：一张“模型—应用—业务系统—评测治理”四层图。

### 第 2 步：理解模型调用、Prompt 与评估

- [Datawhale：动手学大模型应用开发](https://datawhalechina.github.io/llm-universe/)
- 难度：入门实践。
- 只学：第一章；第二章的基本概念与 Prompt Engineering；第五章的评估入门。
- 产出：Token、采样稳定性、Prompt 版本和字段级一致性实验。

### 第 3 步：跟随中文视频建立结构化提示词

- [书生浦语：浦语提示词工程实践](https://www.bilibili.com/video/BV1tjS7YfEWJ/)
- 难度：进阶实践。
- 只学：结构化提示词部分，跳过与企业工单无关的文案案例。
- 产出：工单任务的角色、目标、约束、流程和输出契约。

### 第 4 步：完成中文任务并转入工单实验

- [书生浦语：提示词工程任务文档](https://github.com/InternLM/Tutorial/tree/camp4/docs/L1/Prompt)
- 难度：动手训练。
- 只做：结构化提示词练习，然后使用平台提供的 20 条中文工单测试三个 Prompt 版本。
- 产出：三个 Prompt、实验 CSV、业务校验器、失败案例和改进说明。

## 练习数据与参考答案

- [第一阶段可执行学习单](workbook.md)：四个单元的操作步骤与分层答案。
- [20 条中文种子工单](../docs/downloads/stage-1/tickets-seed.jsonl)：包含正常、模糊、高风险和注入输入。
- [实验记录模板](../docs/downloads/stage-1/experiment-record.csv)：记录字段稳定率、延迟、Token 和失败类型。
- [三个 Prompt 版本参考答案](../docs/downloads/stage-1/prompt-reference.md)：独立完成后再对照迭代思路。
- [35 道习题参考答案](answer-key.md)：原理、设计、业务与面试题。
- [Go 参考校验器](lab/reference/validator.go)：演示合法 JSON 仍需业务校验。
- [Go / No-Go 报告模板](../docs/downloads/stage-1/go-no-go-template.md)：完成最终上线判断。

## 生产现状的取材原则

- 优先选择政府部门、研究机构、云厂商中文官方文档和国内开源社区的一手资料。
- 行业数字必须写明发布日期、样本范围和统计口径；找不到中文原始口径时宁可不写数字。
- 将“公开事实”“工程实验”“个人判断”“未来预测”分开表达。
- 模型能力与产品功能变化快，知乎文章发布前重新核对页面日期和当前能力。

## 本阶段不做什么

- 不把英文报告或英文视频列为必读资料。
- 不提前学习 RAG、Agent、LoRA 和部署课程。
- 不以“看完资料”作为验收，必须完成测试集、项目指标和失败案例。
