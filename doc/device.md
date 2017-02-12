# 基础

## 设备
此类方法可以辨识设备的系统、浏览器及其版本。

### $device.os() {#os}
获取设备的系统名称。

#### 参数
无

#### 返回
string：返回系统的名称。

| 系统名称 | 描述 |
| :--- | :--- |
| ios | iOS |
| android | Android |
| windows | Windows |
| mac | macOS |

#### 用法
```
let os = $device.os();
```

### $device.version() {#version}
获取系统版本号。

#### 参数
无

#### 返回
string：返回系统的版本号。

#### 用法
```
let ver = $device.version();
```

### $device.browser() {#browser}
获取当前浏览器名称。

#### 参数
无

#### 返回
string：返回浏览器的名称。

| 系统名称 | 描述 |
| :--- | :--- |
| safari | Safari |
| chrome | Chrome |
| webkit | Webkit |
| weixin | 微信 |
| uc | UC |
| ie | IE |
| edge | Edge |

#### 用法
```
let br = $device.browser();
```
