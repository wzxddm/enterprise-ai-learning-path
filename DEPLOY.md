# 独立发布到 GitHub

## 当前仓库边界

当前 `ai` 目录位于父仓库 `/Users/wzx/work/go/gopath/src/github.com/wzxddm` 内，父仓库远程是 `https://github.com/wzxddm/doubao.git`。

不要直接在父仓库执行 `git add .` 或推送，否则可能把学习平台和同级项目一起提交到 `doubao`。

## 推荐发布方式

先在 GitHub 创建一个空仓库，例如：

```text
wzxddm/enterprise-ai-learning-path
```

然后在当前 `ai` 目录初始化独立仓库：

```bash
git init
git branch -M main
git add README.md DEPLOY.md docs 00-overview 01-llm-basics 02-deep-learning-basics 03-transformer-gpt 04-rag 05-agent 06-finetuning-alignment 07-evaluation-deployment progress projects writing
git commit -m "feat: add enterprise AI learning platform"
git remote add origin https://github.com/wzxddm/enterprise-ai-learning-path.git
git push -u origin main
```

推送前应先确认新仓库地址，不能沿用父仓库的 `doubao` 远程。

## 开启 GitHub Pages

在新仓库进入：

```text
Settings → Pages → Deploy from a branch → main → /docs
```

打卡数据保存在浏览器本地，不会提交到 GitHub。
