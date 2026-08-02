# 独立发布到 GitHub

- GitHub 仓库：<https://github.com/wzxddm/enterprise-ai-learning-path>
- 在线平台：<https://wzxddm.github.io/enterprise-ai-learning-path/>
- 发布源：`main` 分支的 `/docs` 目录

## 当前仓库边界

当前 `ai` 目录物理上位于父仓库 `/Users/wzx/work/go/gopath/src/github.com/wzxddm` 内，但已经初始化为独立 Git 仓库；父仓库远程是 `https://github.com/wzxddm/doubao.git`。

所有 Git 操作都应在当前 `ai` 目录执行，远程必须指向新的学习平台仓库，不能使用 `doubao`。

## 当前发布状态

当前仓库已经创建、推送并启用 GitHub Pages：

```text
wzxddm/enterprise-ai-learning-path
```

后续更新使用：

```bash
git add .
git commit -m "描述本次变更"
git push
```

推送前应先确认新仓库地址，不能沿用父仓库的 `doubao` 远程。

## GitHub Pages 配置

当前配置为：

```text
Settings → Pages → Deploy from a branch → main → /docs
```

打卡数据保存在浏览器本地，不会提交到 GitHub。
