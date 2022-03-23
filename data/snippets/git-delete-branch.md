---
title: 'Git Delete Branch'
description: 'How to delete local and remote branches.'
logo: 'git.png'
---

## In a nutshell

```git
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

## Deleting a branch locally

Git will not let you delete the branch you are currently on. Make sure to switch to a branch that your are not deleting. For example: `git switch main`

Delete a branch with `git branch -d <branch>`

For example: `git branch -d feature/snippets`

The `-d` option will delete the branch only if it has already been pushed and merged with the remote branch. Use `-D` instead if you want to force the branch to be deleted, even if it hasn't been pushed or merged yet.

## Deleting a branch remotely

The command for deleting a remote branch: `git push <remote> --delete <branch>`

For example: `git push origin --delete feature/snippets`
