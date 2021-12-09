# Codegrade Setup

## 1- Fixtures

### Student-Facing

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

## 2- Global Setup Script

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs; cg-jest install; npm i -g jest@27.4.3
```

## 3- Per-Student Setup Script

```bash
mv $FIXTURES/* . && npm install
```

## 4- Auto Tests

### Learner-Facing - Weight 100

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp.test.js --forceExit
```
