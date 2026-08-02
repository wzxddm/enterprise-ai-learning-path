# 独立发布到 GitHub

## 当前仓库边界

当前 `ai` 目录物理上位于父仓库 `/Users/wzx/work/go/gopath/src/github.com/wzxddm` 内，但已经初始化为独立 Git 仓库；父仓库远程是 `https://github.com/wzxddm/doubao.git`。

所有 Git 操作都应在当前 `ai` 目录执行，远程必须指向新的学习平台仓库，不能使用 `doubao`。

## 推荐发布方式

先在 GitHub 创建一个空仓库，例如：

```text
wzxddm/enterprise-ai-learning-path
```

当前目录已经完成初始化和首次提交。创建远程仓库后执行：

```bash
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
