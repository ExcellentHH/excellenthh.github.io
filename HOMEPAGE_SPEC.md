# 段皓铧个人学术主页建设说明书（Codex Handoff）

> **发布授权（2026-09-23，优先于此前暂不发布约束）**：用户要求最终检查通过后合并 main 并发布。使用现有 Jekyll 架构和 GitHub Pages 的 main 根目录构建；无需额外批准。未引用的证书 backup 保留本地，排除 Git 和构建输出。

> **中文身份与链接检查补充**：About Me 中 ECUST 后补充“华东理工大学”，侧栏使用 Lecturer（讲师） / Master's Supervisor（硕士生导师）；News 中两处 USENIX Security 2026 加粗。主页链接检查区分地址已配置、目的页面可访问、第三方访问验证，不将 HTTP 200 验证页面误报为正常内容。

> **最新精简要求（优先于旧稿）**：News 录用日期只显示年月：PVMark 为用户确认的 2026.06，TDSC 为 2024.01，TIFS 为 2023.06，具体日期来源保留在 LINKS.md。删除 Prospective Students 栏目及导航，将一段简短英文邀请放到 About Me 最后：欢迎对大模型安全、可信机器学习、信息安全与隐私保护感兴趣、有主动性的本科生和研究生联系，邮箱继续显示 [at] / [dot]。当前为八个一级栏目。

> **最新页面结构与新闻补充**：删除 About Me 顶部研究方向展示块；Education & Experience 移到 About Me 后，导航同步。侧栏隐藏缺失资料的 TODO 并加入 LLM Security。用户尚无 Scholar 个人档案，使用 author:"Haohua Duan" 搜索链接，标注为作者搜索。News 新增用户提供的 2025.06 工学博士毕业，以及从论文首页核实的 TDSC 录用日期 2024-01-12；TIFS 录用日期由用户确认是 2023-06-11，已加入新闻，不用出版日期代替。

> **最新联系信息与教学补充（优先于旧稿）**：PVMark Code 链接使用 https://github.com/ExcellentHH/PVMark，删除 PPTX 按钮及必需素材项。邮箱在侧栏和招生处显示 [at] / [dot]，页面不保留明文 mailto。DBLP、ORCID 已联网交叉核实，来源见 LINKS.md。三篇代表作的 Liyao Xiang 标注右上角 * 并解释为通讯作者。两项专利均有已核实链接；没有论文关联时不展示 TODO。教学为 2022 秋季 CS149 Data Structure and Algorithms 助教，以及当前 2026 秋季 New Computer Networks 任课，替代笼统博士期间表述。

> **2026-09-23 用户后续确认（优先于下文原始方案）**：删除 Featured Research 正文和导航入口，PVMark 只在 Selected Publications 中以论文卡片展示。Honors 支持证书图片缩略图及点击放大；PVMark 支持海报 PDF、Slides PDF 在线查看，以及 PPT/PPTX 原文件下载。当前为九个一级栏目。素材未提供时保留 TODO，不生成或猜测正式素材。

> **About Me 视觉优先级补充**：面向学生，将 LLM Security · AI Agent Security 作为首要大字展示，并保留 Current research interests 标注；Applied Cryptography × Trustworthy AI 紧随其后作为方法与研究定位。此调整不将未来方向表述为已有成果。

> **研究叙事补充**：按“密码学方法基础 → 大模型与智能体安全可信 → 电力能源应用探索”组织 About Me、Research Interests 和招生文案。电力能源小节改为 Application Focus: Energy & Power Systems，明确探索其中的数据安全与隐私，以及大模型、智能体的安全可信应用，不再作为另一个平行兴趣罗列。使用 aim / plan to explore / potential projects 区分研究目标和已有成果，不暗示已有能源项目或智能体成果。

> **用户素材接入**：使用 images/ 中提供的头像、证书及 PDF。三篇论文图由 PVMark_framework.pdf、VPNNT_framework_1.pdf、Terrace_example.pdf 渲染，支持点击放大；VPNNT_framework_2.pdf 作为补充 Training (PDF) 链接。PVMark 论文、海报、幻灯片使用现有原始路径，不移动或修改源文件。证书确认大会英文名为 China Cyber Security Congress；“最佳海报”译为 Best Poster Award，保留中文便于核对，不宣称证书提供了英文奖项名称。

> **导师称谓与论文分类补充**：About Me 和教育经历统一使用 “Prof. Liyao Xiang and Prof. Xinbing Wang”，保留个人主页链接；论文作者列表沿用姓名，不加称谓。三张 Selected Publications 卡片的会议/期刊旁显示 CCF-A，分类依据 CCF 官方网络与信息安全目录，来源见 LINKS.md。

> **教学与教育经历补充（用户提供）**：上海交通大学读博期间担任数据结构课程助教（未提供具体学期，不自行补充）；本科就读吉林大学唐敖庆理科试验班（计算机班）；博士导师为向立瑶、王新兵。About Me 也写明博士导师，并补充本科期间曾在王恩教授实验室学习，不添加具体时间、职务或成果；三位老师姓名链接到已核实的个人主页。

> **本科项目英文表述（联网核实）**：吉林大学公共外语教育学院官方英文页面使用 “Tang Aoqing Program”，主页采用 “Tang Aoqing Program (Computer Science)”。其中 Computer Science 是用户提供的班级方向说明，并非宣称找到了完整统一的官方英文名称；未采用仅在个人简历中出现的 Honors Program 用语。来源及导师链接见 LINKS.md。

> 版本：V1.0  
> 目的：将本次讨论中关于个人学术主页的定位、信息架构、页面内容、视觉重点、技术实现和后续维护策略整理成一份可以直接交给 Codex 执行的需求文档。  
> 推荐模板：RayeRen / AcadHomepage  
> 主页默认地址：`https://excellenthh.github.io`  
> GitHub 用户名：`ExcellentHH`

---

## 1. 建站目标

这个主页不是“网页版简历”的简单复制，也不是为了把所有经历都塞进去，而是要承担三个功能：

1. **学术身份入口**  
   当同行、潜在合作者、会议组织者、编辑或评审搜索 “Haohua Duan / 段皓铧” 时，能在 30–60 秒内知道：
   - 我是谁；
   - 我研究什么；
   - 我的代表性工作是什么；
   - 我的研究路线如何从 ZKP / Verifiable Computation 延伸到 Trustworthy AI；
   - 如何进一步联系我、查看论文、代码、CV。

2. **招生入口**  
   后续可能通过小红书等渠道宣传主页，希望本科生、硕士生点击后能够快速看到：
   - Large Language Model Security；
   - AI Agent Security；
   - Trustworthy AI；
   - Zero-Knowledge Proofs；
   - Privacy-Preserving Machine Learning；
   - Data Security & Privacy for Energy Systems。

   对学生而言，应避免让页面第一印象变成“纯密码学、门槛极高、与 AI 无关”。

3. **长期研究品牌沉淀**  
   主页需要帮助把目前和未来几年的研究组织成一条统一主线，而不是呈现为若干互不相关的热门主题。

---

## 2. 总体定位：不要把方向写散

### 2.1 总的学术身份

推荐使用：

**Applied Cryptography × Trustworthy AI**

或正式一些：

**Applied Cryptography for Trustworthy AI**

首页可以使用一句 research vision：

> **My research aims to make emerging AI systems not only intelligent, but also secure, private, and verifiable.**

这句话可以统一当前和未来的研究：

- Zero-Knowledge Proofs → verifiable / privacy-preserving
- Verifiable Federated Learning → trustworthy ML
- PVMark → trustworthy LLM / AI-generated content
- LLM Security → secure / trustworthy AI
- AI Agent Security → secure / verifiable autonomous systems
- Energy Data Security & Privacy → secure / private data-intensive systems

### 2.2 研究方向的层次关系

不要把下面所有关键词平铺：

- ZKP
- Verifiable Computation
- Federated Learning
- LLM Watermark
- LLM Security
- Agent Security
- Unlearning
- Energy
- MPC
- HE

这样会显得研究方向零散。

推荐分成三个层次：

#### A. 核心方法基础
**Zero-Knowledge Proofs & Verifiable Computation**

这是已有论文支撑最强的技术根基。

#### B. 核心研究对象
**Trustworthy AI, LLM & Agent Security**

这是当前和未来最值得强化的研究对象，对学生也更有吸引力。

#### C. 重点拓展应用场景
**Data Security & Privacy for Energy Systems**

能源电力是重点应用方向，但在已有代表作尚未形成之前，视觉权重应低于 ZKP / LLM / Agent。

---

## 3. 目标受众与页面信息优先级

### 第一类：同行 / 潜在合作者
最关心：
- 研究主线；
- 代表性论文；
- 技术特色；
- 代码和 artifact；
- 专利；
- 当前研究方向。

### 第二类：潜在学生
最关心：
- 大模型安全；
- 智能体安全；
- AI Security；
- 是否招本科生 / 硕士生；
- 是否需要很强密码学背景；
- 能做哪些具体方向。

### 第三类：项目、产业与学院合作方
最关心：
- 高水平论文；
- 专利；
- 代码实现；
- 数据安全与隐私；
- 电力能源等落地场景。

因此页面排序不能完全照 CV，而应优先突出“研究身份 + 代表工作”。

---

## 4. 模板与技术路线

### 4.1 模板

使用：

**RayeRen / AcadHomepage**

Repository：

`https://github.com/RayeRen/acad-homepage.github.io`

选择理由：

- 左侧固定个人 Profile，右侧单页式学术内容；
- 页面即使内容不多也不会显得空；
- 自带 `paper-box` publication card，适合三篇代表作；
- 支持 Markdown + HTML；
- 支持响应式页面；
- 可部署到 GitHub Pages；
- 支持 Google Scholar citation crawler、Google Analytics、SEO 等扩展；
- 第一版主要只需要修改 `_config.yml` 与 `_pages/about.md`。

### 4.2 GitHub Pages 地址

保留当前 GitHub 用户名：

`ExcellentHH`

GitHub 官方要求用户主页仓库名为：

`<username>.github.io`

若用户名包含大写字母，仓库名应使用小写，因此建议：

`excellenthh.github.io`

默认访问地址：

`https://excellenthh.github.io`

V1 暂不购买独立域名。

以后如有必要，可再绑定：

- `haohuaduan.com`
- `haohuaduan.cn`

### 4.3 V1 原则

第一版只追求：

1. 页面正常部署；
2. 内容准确；
3. PC 与手机都好看；
4. 代表作突出；
5. 招生方向清晰。

暂不优先做：

- Google Scholar citation crawler；
- Analytics；
- 搜索引擎站长验证；
- 自定义域名；
- Blog；
- 多语言切换；
- 复杂动画。

---

## 5. 页面整体结构

主页建议严格按照以下顺序：

1. **About Me**
2. **Research Interests**
3. **News**
4. **Featured Research**
5. **Selected Publications**
6. **Honors & Awards**
7. **Patents**
8. **Prospective Students**
9. **Teaching**
10. **Education & Experience**

建议删除模板中第一版不需要的：

- Invited Talks
- Internships
- Blog
- Gallery
- 独立 Projects 页面
- 独立 Students 页面
- Media 页面

“Academic Service” 暂时不加，等有足够高质量内容后再增加。

---

# 6. 左侧 Profile / `_config.yml`

左侧保持简洁。

## 6.1 推荐显示

**Haohua Duan | 段皓铧**

Lecturer / Master's Supervisor  
East China University of Science and Technology

可选 bio：

> Applied Cryptography × Trustworthy AI

或：

> Lecturer @ ECUST  
> Applied Cryptography · Trustworthy AI

## 6.2 推荐保留的链接

- Email
- Google Scholar
- GitHub
- DBLP
- ORCID
- CV

不建议第一版堆：

- ResearchGate
- 微博
- Twitter/X
- 小红书
- 其他没有长期维护的平台

## 6.3 联系邮箱

公开主页优先使用学校工作邮箱：

`duanhaohua@ecust.edu.cn`

不要把 QQ 邮箱作为主页主邮箱。

---

# 7. About Me 建议文案

建议控制在 2 段，不写成长篇自传。

## 推荐英文版本

> I am a Lecturer at the School of Information Science and Engineering, East China University of Science and Technology (ECUST). I received my Ph.D. degree from Shanghai Jiao Tong University.
>
> My research lies at the intersection of **applied cryptography, security, and trustworthy artificial intelligence**, with a particular focus on **zero-knowledge proofs and verifiable computation**. I am interested in building **secure, privacy-preserving, and verifiable intelligent systems**, including large language models, AI agents, privacy-preserving machine learning, and data-intensive energy systems.

可在其后独立放一句 research vision：

> **My research aims to make emerging AI systems not only intelligent, but also secure, private, and verifiable.**

## 写作原则

不要在 About 中写：

- “I am an expert in Agent Security”
- “I specialize in Energy AI”

因为这两条目前更适合表述为未来拓展方向，而不是成熟成果。

---

# 8. Research Interests

建议固定为三个一级方向。

## 8.1 Zero-Knowledge Proofs & Verifiable Computation

> Efficient and practical cryptographic proof systems, with an emphasis on zero-knowledge proofs and verifiable computation for real-world applications.

定位：
- 方法论基础；
- 与 TIFS 2023 强对应；
- 支撑后续所有可信验证类工作。

## 8.2 Trustworthy AI, LLM & Agent Security

> Security, privacy, verifiability, and provenance of emerging AI systems, particularly **large language models and autonomous AI agents**. Current interests include trustworthy AI-generated content, watermarking, secure agent actions, and cryptographically verifiable AI systems.

这里故意出现：

- LLM
- Agent
- Security
- Trustworthy AI

原因：后续需要用主页招生，小红书用户和本科生对这些词更敏感。

表述使用：

> Current interests include...

避免暗示已有大量 Agent Security 成果。

## 8.3 Data Security & Privacy for Energy Systems

> Security and privacy technologies for data-intensive energy and power systems, including **privacy-preserving data utilization, secure data sharing, and verifiable intelligent decision-making**.

这个方向写入主页的理由：

- 后续确实计划探索电力能源场景；
- 与数据安全、隐私保护、密码学技术自然衔接；
- 有助于团队内部和校企合作识别这一应用能力。

但注意：

**首页最醒目的关键词仍应是 Applied Cryptography / Trustworthy AI / LLM & Agent Security。**

Energy 作为应用拓展方向，不要与已有成熟主线抢视觉中心。

---

# 9. News

News 的作用不是“凑新闻数量”，而是让访客知道主页正在持续维护。

第一版建议 3–5 条。

## 建议内容

```markdown
# 🔥 News

- *2026.09*: 🎉 Our PVMark poster received the **Best Poster Award** at the First China Cyberspace Security Conference (CCSC 2026).
- *2026.08*: 🎉 Presented **PVMark** at USENIX Security 2026.
- *2026*: 🎉 Our paper **PVMark** was accepted by USENIX Security 2026.
- *2025.09*: Joined East China University of Science and Technology as a Lecturer.
```

### 注意

“Best Poster Award”的最终英文名称，发布前建议以：

- 奖状；
- 官方通知；
- 大会官网；

中的正式表述为准。

当前可以先按占位内容实现。

以后 News 主要增加：

- Paper accepted
- Grant funded
- Award
- Invited talk
- Student achievement
- Open-source artifact release

---

# 10. Featured Research：PVMark

PVMark 应成为整个主页当前最重要的 **anchor work**。

不要只在 Publications 列表出现一次，而应贯穿：

- News
- Featured Research
- Publications
- Awards
- Patents
- Code / Poster / Slides

这不是重复，而是从不同维度展示同一代表成果。

## 10.1 标题

**PVMark**  
*Enabling Public Verifiability for LLM Watermarking Schemes*

Badge：

**USENIX Security 2026**

## 10.2 一句话简介

> PVMark enables third parties to verify the correctness of LLM watermark detection without revealing the secret watermark key.

## 10.3 稍长版本

> Existing LLM watermark detectors often rely on secret keys, making their detection results difficult for third parties to independently verify. PVMark introduces zero-knowledge proofs to make watermark detection publicly verifiable without disclosing the secret key.

## 10.4 推荐按钮

- Paper
- Code
- Slides
- Poster
- Patent
- USENIX

## 10.5 Award badge

在 Featured Research 中增加一个轻量 badge：

> 🏆 Best Poster Award · CCSC 2026

## 10.6 图片

优先使用：

**PVMark system / workflow overview**

不要使用：
- 论文第一页截图；
- 复杂性能表；
- 小字体实验图。

目标是访客 5 秒内理解：

“secret-key watermark detection → ZKP → public verification”

---

# 11. Selected Publications

首页只放三篇代表作，标题使用：

**Selected Publications**

而不是：

**Publications**

这样不会给访客形成“作者总共只有三篇”的误解。

完整论文列表通过 Google Scholar / DBLP 查看。

三篇全部使用模板原生 `paper-box` 卡片，不要只让第一篇有图片、后两篇变成普通列表。

---

## 11.1 PVMark

**PVMark: Enabling Public Verifiability for LLM Watermarking Schemes**

Authors:

**Haohua Duan**, Liyao Xiang, Xin Zhang, Baochun Li, Bo Li

Venue:

**USENIX Security 2026**

Buttons:

`Paper` · `Code` · `Slides` · `Poster` · `Patent` · `USENIX`

Figure：

`images/pvmark.png`

---

## 11.2 Verifiable Federated Learning

**A Verifiable and Privacy-Preserving Federated Learning Training Framework**

Authors:

**Haohua Duan**, Zedong Peng, Liyao Xiang, Yuncong Hu, Bo Li

Venue:

**IEEE Transactions on Dependable and Secure Computing (TDSC), 2024**

DOI:

`10.1109/TDSC.2024.3369658`

Buttons:

`Paper` · `Code`

Code 候选：

`ExcellentHH/sumcheck-matrix-ops`

Figure：

优先选论文中的：

- system architecture；
- verification workflow；
- backpropagation verification overview。

文件建议：

`images/verifiable-fl.png`

---

## 11.3 Terrace / General-Circuit ZKP

**A New Zero Knowledge Argument for General Circuits and Its Application**

Authors:

**Haohua Duan**, Liyao Xiang, Xinbing Wang, Pengzhi Chu, Chenghu Zhou

Venue:

**IEEE Transactions on Information Forensics and Security (TIFS), 2023**

DOI:

`10.1109/TIFS.2023.3288454`

Buttons:

`Paper`

Figure：

优先选：
- Terrace framework；
- protocol / general-circuit structure；
- 一张能表达“general circuits + ZKP”的结构图。

文件建议：

`images/terrace.png`

---

# 12. 三篇论文需要共同讲出的 Research Story

三张卡片不是独立罗列，而是有意体现研究轨迹：

### Step 1
**Zero-Knowledge Proofs for General Computation**  
TIFS 2023

↓

### Step 2
**Verifiable & Privacy-Preserving Machine Learning**  
TDSC 2024

↓

### Step 3
**Publicly Verifiable Generative AI**  
USENIX Security 2026

最终让访客形成：

> **ZKP → Verifiable ML → Verifiable LLM / Trustworthy AI**

的印象。

这比单纯强调“3 篇 A 类论文”更重要。

---

# 13. Honors & Awards

目前建议保留该栏目。

## 第一版

```markdown
# 🏆 Honors & Awards

- **Best Poster Award**, First China Cyberspace Security Conference (CCSC), 2026  
  *PVMark: Enabling Public Verifiability for LLM Watermarking Schemes*
```

建议链接：
- Award / conference news（如有）
- Poster PDF

如官方没有公开获奖页面，可暂不加外链，只保留文字。

以后如果只有一般性小奖项，不建议全部堆进去。

---

# 14. Patents

专利应单独作为一级栏目，因为它能体现：

- 技术落地；
- 知识产权；
- 从论文到应用的转换能力。

## 14.1 Patent 1

中文：

**可公开验证的大语言模型水印检测方法及系统**

英文：

**Publicly Verifiable Large Language Model Watermark Detection Method and System**

Patent No.:

**CN119577708B**

Inventors:

Liyao Xiang, **Haohua Duan**

Granted:

**2025-09-19**

与 PVMark 高度相关。

建议在 Patent 页面和 PVMark Featured Research 之间互相链接。

---

## 14.2 Patent 2

中文：

**机器学习图像分类模型所有权验证方法及系统**

英文：

**Machine Learning Image Classification Model Ownership Verification Method and System**

Patent No.:

**CN119579975B**

Inventors:

Liyao Xiang, **Haohua Duan**

Granted:

**2025-11-04**

该专利与：

- AI model ownership；
- watermark；
- ZKP；
- AI security；

主线高度契合。

---

# 15. Prospective Students

这是主页面向小红书招生时非常重要的一栏。

不要只写：

> Students interested in cryptography are welcome.

否则本科生容易觉得方向过于理论。

推荐：

## 标题

**Prospective Students**

## 推荐文案

> I am looking for motivated undergraduate and graduate students interested in **AI security and applied cryptography**.
>
> Potential research topics include:
>
> **Large Language Model Security · AI Agent Security · Trustworthy AI · Zero-Knowledge Proofs · Privacy-Preserving Machine Learning · Data Security & Privacy for Energy Systems**
>
> Students from computer science, cybersecurity, artificial intelligence, software engineering, mathematics, and related backgrounds are welcome to contact me.

可以增加一句降低学生心理门槛：

> Prior experience in cryptography is helpful but not required; strong motivation and willingness to learn are more important.

是否使用这句话可由本人最终决定。

后续如果明确招生类型，可增加：

- Undergraduate research
- Final-year projects
- Master's students

第一版不要写具体名额，以免频繁修改。

---

# 16. Teaching

Teaching 保持轻量。

## 内容

**New Computer Networks（新型计算机网络）**

East China University of Science and Technology

不用为只有一门课而觉得内容少。

暂时不需要写：
- syllabus；
- lecture notes；
- teaching philosophy。

以后教学内容增多再扩展。

---

# 17. Education & Experience

页面底部简洁呈现。

## Experience

**2025.09 – Present**  
Lecturer, East China University of Science and Technology

## Education

**2020.09 – 2025.06**  
Ph.D., Shanghai Jiao Tong University

**2016.09 – 2020.06**  
B.S., Jilin University

不要重复学校官方主页上所有行政信息。

---

# 18. Research Artifacts / Open Source 的处理方式

第一版不建议单独做很大的：

**Open Source Projects**

栏目。

更好的做法是让 Code 附着在对应论文下面：

### PVMark

`Paper · Code · Slides · Poster · Patent`

### Verifiable FL

`Paper · Code`

### Terrace

`Paper`

这样访客会自然感受到：

- 不只是论文；
- 有代码；
- 有 artifact；
- 有 poster；
- 有 slides；
- 有专利。

比单独罗列 GitHub repositories 更专业。

---

# 19. GitHub 仓库的展示策略

Academic Homepage 不等于 GitHub 仓库列表。

主页重点链接：

1. `PVMark`
2. `sumcheck-matrix-ops`

与学术身份关联较弱的仓库不主动展示，例如：

- fanqiang
- checkin
- daily_stock_analysis
- tcp_server_client
- 一般性 fork / 学习仓库

这些可以保留在 GitHub，但不应进入主页视觉中心。

未来建议 GitHub Profile README 也同步改成学术身份：

- Haohua Duan
- Lecturer @ ECUST
- Applied Cryptography
- Trustworthy AI
- Homepage
- Scholar
- PVMark

---

# 20. 首页视觉设计原则

## 20.1 保留 AcadHomepage 原有风格

不要大改主题。

原因：

- 学术感强；
- 简洁；
- 不像商业 portfolio；
- 手机兼容较好；
- 后续维护成本低。

## 20.2 视觉中心

页面视觉优先级：

1. 头像 + 姓名
2. About + Research identity
3. PVMark Featured Research
4. 三张 Selected Publications
5. Award + Patent
6. Recruitment

## 20.3 不要过度装饰

避免：

- 动画背景；
- 粒子效果；
- 巨型渐变标题；
- 自动播放视频；
- skill progress bar；
- GitHub contribution graph 作为首页核心；
- 各种技术 logo 堆满页面。

## 20.4 论文卡片

三篇 Selected Publications 均使用统一 card：

- 左：论文框架图；
- 右：标题、作者、venue、buttons；
- badge 显示 venue/year；
- 保持图片尺寸统一。

---

# 21. 推荐目录结构

```text
excellenthh.github.io/
│
├── _config.yml
│
├── _pages/
│   └── about.md
│
├── images/
│   ├── profile.jpg
│   ├── pvmark.png
│   ├── verifiable-fl.png
│   ├── terrace.png
│   └── favicon files...
│
├── files/
│   ├── Haohua_Duan_CV.pdf
│   ├── PVMark_CCSC2026_Poster.pdf
│   └── PVMark_USENIX2026_Slides.pdf
│
├── assets/
├── _includes/
├── _layouts/
├── _sass/
├── .github/
├── Gemfile
├── Gemfile.lock
└── README.md
```

Codex 不应为了“代码更现代”而擅自重写 Jekyll 架构。

优先基于模板做最小修改。

---

# 22. Codex 开发步骤

## Phase 1：创建仓库

1. Fork：
   `RayeRen/acad-homepage.github.io`
2. Repo name：
   `excellenthh.github.io`
3. Public repository。
4. Clone 到本地。

## Phase 2：清理模板内容

删除 `_pages/about.md` 中所有：

- Lorem ipsum；
- demo authors；
- demo publications；
- demo awards；
- demo talks；
- demo internships。

但保留可复用 HTML 结构，例如：

- `paper-box`
- `badge`

## Phase 3：修改 `_config.yml`

填入：

- title
- description
- repository
- author.name
- avatar
- bio
- location
- employer
- email
- GitHub
- Scholar
- DBLP
- ORCID

Google Analytics 暂时为空。

## Phase 4：完成 `about.md`

按固定结构：

1. About Me
2. Research Interests
3. News
4. Featured Research
5. Selected Publications
6. Honors & Awards
7. Patents
8. Prospective Students
9. Teaching
10. Education & Experience

## Phase 5：添加 assets

等待本人提供：

- profile photo；
- 三张论文图；
- PVMark poster；
- USENIX slides；
- CV。

如果文件尚未提供：

**Codex 必须使用占位路径，不得自行从网上下载不确定版本并永久放入 repo。**

例如：

`images/pvmark-placeholder.png`

并在 TODO 中注明需要替换。

## Phase 6：本地预览

按照模板 README：

- 安装 Jekyll 环境；
- `bash run_server.sh`
- 浏览 `http://127.0.0.1:4000`

如 Windows 环境安装 Ruby/Jekyll 较麻烦，可以优先使用：

- GitHub Pages 在线构建；
- Codespaces；
- Docker；

但不要因为本地环境问题重构网站。

## Phase 7：GitHub Pages 发布

进入：

`Settings → Pages`

按模板 / GitHub Pages 官方方式发布。

目标：

`https://excellenthh.github.io`

## Phase 8：V1 验收后再扩展

V2：

- Google Scholar crawler；
- Google Analytics；
- SEO verification；
- 自定义 favicon；
- 独立域名；
- Academic Service；
- Talks。

---

# 23. 发布前本人需要补充的资料清单

## 必须

- [ ] 正式头像；
- [ ] 学校邮箱确认；
- [ ] Google Scholar URL；
- [ ] DBLP URL；
- [ ] ORCID URL；
- [ ] 完整 CV PDF；
- [ ] PVMark system figure；
- [ ] TDSC paper overview figure；
- [ ] TIFS paper overview figure；
- [ ] PVMark poster PDF；
- [ ] PVMark USENIX presentation slides；
- [ ] 三篇论文 Paper URLs；
- [ ] 代码 URLs。

## 建议

- [ ] Best Poster Award 奖状或官方通知截图/链接；
- [ ] Patent official links；
- [ ] 头像 favicon；
- [ ] 个人一句话 tagline 最终确认。

---

# 24. 内容准确性规则

Codex 必须遵循以下规则：

### 24.1 已有成果与未来方向分开

已有成果：

- ZKP
- Verifiable Computation
- Verifiable Federated Learning
- PVMark
- LLM Watermarking
- Patents

未来 / Current Interests：

- LLM Security
- Agent Security
- Energy Data Security & Privacy

不要把未来方向写成：

> “My extensive work on AI agent security...”

应该写：

> “I am currently interested in...”

或：

> “Current interests include...”

### 24.2 不自动夸大学术身份

避免：

- leading researcher
- world-class
- renowned
- top expert

让论文、专利、奖项自己体现实力。

### 24.3 不公开未发表课题细节

主页只展示方向，不写：

- 未发表协议设计；
- 尚未投稿的核心 idea；
- 详细 threat model；
- 尚未公开项目技术路线。

### 24.4 Award 最终 wording 要核验

发布前核对：

- “Best Poster Award”
- “First China Cyberspace Security Conference”
- CCSC 2026

与奖状/官方名称保持一致。

---

# 25. V1 首页完整逻辑示意

```text
┌──────────────────────┬──────────────────────────────────────────┐
│                      │ About Me                                 │
│      [Profile]       │ Applied Cryptography × Trustworthy AI    │
│                      │                                          │
│ Haohua Duan | 段皓铧 │ Research vision                         │
│ Lecturer @ ECUST     │                                          │
│                      │ Research Interests                       │
│ Email                │ • ZKP & Verifiable Computation           │
│ Scholar              │ • Trustworthy AI, LLM & Agent Security  │
│ GitHub               │ • Data Security & Privacy for Energy    │
│ DBLP                 │                                          │
│ ORCID                │ 🔥 News                                  │
│ CV                   │                                          │
│                      │ 🌟 Featured Research                     │
│                      │                                          │
│                      │ [PVMark Figure]  PVMark                   │
│                      │ USENIX Security 2026                     │
│                      │ Paper Code Slides Poster Patent          │
│                      │ 🏆 Best Poster @ CCSC 2026               │
│                      │                                          │
│                      │ 📝 Selected Publications                 │
│                      │                                          │
│                      │ [Fig] PVMark        USENIX Security '26  │
│                      │ [Fig] Verifiable FL TDSC '24             │
│                      │ [Fig] Terrace       TIFS '23              │
│                      │                                          │
│                      │ 🏆 Honors & Awards                       │
│                      │ 💡 Patents                               │
│                      │ 🎓 Prospective Students                  │
│                      │ 📖 Teaching                              │
│                      │ 🎓 Education & Experience                │
└──────────────────────┴──────────────────────────────────────────┘
```

---

# 26. 小红书招生时主页要形成的第一印象

学生点击主页后的 10 秒内，应看到：

> **LLM Security**  
> **AI Agent Security**  
> **Trustworthy AI**  
> **Zero-Knowledge Proofs**

但继续往下看时，会发现这些不是空洞“蹭热点”：

- 有 USENIX Security 2026；
- 有 TDSC 2024；
- 有 TIFS 2023；
- 有 PVMark；
- 有代码；
- 有专利；
- 有 Best Poster Award。

这形成：

> **热门 AI Security 研究对象 + 扎实应用密码学技术底座**

的定位。

这也是主页招生价值最大的地方。

---

# 27. 后续研究方向如何更新主页

以后如果 Agent Security 形成论文：

将：

**Trustworthy AI, LLM & Agent Security**

继续保留，并增加对应 Featured / Publication。

如果电力数据安全形成论文：

再考虑将：

**Data Security & Privacy for Energy Systems**

提升视觉权重，甚至增加一张 research card。

如果未来有 3–5 位学生：

增加：

**People**

如果 Academic Service 丰富：

增加：

**Academic Service**

如果 Invited Talks ≥ 3–5 个：

再增加：

**Selected Talks**

不要为了“页面栏目齐全”提前放空栏目。

---

# 28. 维护原则

每次只需要维护三类东西：

## Paper accepted

更新：
- News
- Selected Publications
- Code / PDF links

## Award / Patent / Project

更新：
- News
- Award / Patent

## Research direction 发生长期变化

才修改：
- About
- Research Interests

不要因为每个短期 idea 改一次主页研究方向。

---

# 29. 推荐给 Codex 的完整任务 Prompt

下面这段可以直接交给 Codex：

```text
你需要基于当前仓库中的 RayeRen/AcadHomepage 模板，为 Haohua Duan（段皓铧）建设个人学术主页。

总体要求：
1. 不重构模板，不替换 Jekyll 技术栈；
2. 保留模板现有的极简学术视觉风格和左侧 author profile；
3. 页面以英文为主，姓名显示 “Haohua Duan | 段皓铧”；
4. 网站定位为 Applied Cryptography × Trustworthy AI；
5. 既服务国际同行，也用于后续面向学生招生；
6. 已有成果与未来研究兴趣必须严格区分，禁止夸大未发表方向。

主页结构严格按以下顺序：
1. About Me
2. Research Interests
3. News
4. Featured Research
5. Selected Publications
6. Honors & Awards
7. Patents
8. Prospective Students
9. Teaching
10. Education & Experience

研究方向：
- Zero-Knowledge Proofs & Verifiable Computation
- Trustworthy AI, LLM & Agent Security
- Data Security & Privacy for Energy Systems

Research vision:
“My research aims to make emerging AI systems not only intelligent, but also secure, private, and verifiable.”

Featured Research：
PVMark: Enabling Public Verifiability for LLM Watermarking Schemes
USENIX Security 2026
将 PVMark 作为页面视觉中心。
需要支持 Paper / Code / Slides / Poster / Patent / USENIX 链接。
显示 “Best Poster Award · CCSC 2026”，但如果没有最终 award wording 或链接，请标 TODO，不自行猜测。

Selected Publications 共三篇，全部使用原模板 paper-box 样式：

1.
PVMark: Enabling Public Verifiability for LLM Watermarking Schemes
Haohua Duan, Liyao Xiang, Xin Zhang, Baochun Li, Bo Li
USENIX Security 2026

2.
A Verifiable and Privacy-Preserving Federated Learning Training Framework
Haohua Duan, Zedong Peng, Liyao Xiang, Yuncong Hu, Bo Li
IEEE TDSC 2024
DOI: 10.1109/TDSC.2024.3369658

3.
A New Zero Knowledge Argument for General Circuits and Its Application
Haohua Duan, Liyao Xiang, Xinbing Wang, Pengzhi Chu, Chenghu Zhou
IEEE TIFS 2023
DOI: 10.1109/TIFS.2023.3288454

Patents：
1. Publicly Verifiable Large Language Model Watermark Detection Method and System
   CN119577708B
   Inventors: Liyao Xiang, Haohua Duan

2. Machine Learning Image Classification Model Ownership Verification Method and System
   CN119579975B
   Inventors: Liyao Xiang, Haohua Duan

Prospective Students 中需要明确出现以下关键词：
Large Language Model Security
AI Agent Security
Trustworthy AI
Zero-Knowledge Proofs
Privacy-Preserving Machine Learning
Data Security & Privacy for Energy Systems

当前身份：
Lecturer, East China University of Science and Technology
Master's Supervisor
School of Information Science and Engineering

教育经历：
Ph.D., Shanghai Jiao Tong University, 2020–2025
B.S., Jilin University, 2016–2020

Teaching：
New Computer Networks（新型计算机网络）

技术要求：
- 修改 _config.yml；
- 主要主页内容放在 _pages/about.md；
- 三篇论文图片统一放 images/；
- CV / Poster / Slides 放 files/；
- 不添加 Blog、Internships、Gallery 等栏目；
- 不启用 Google Scholar crawler，留待 V2；
- 不添加复杂动画；
- PC 和 mobile 都要检查；
- 若缺少图片、PDF、Scholar/DBLP/ORCID 等链接，请用 TODO 占位，不要自行杜撰；
- 部署目标为 GitHub Pages 用户主页；
- 当前 GitHub username 为 ExcellentHH，repository 采用 excellenthh.github.io。

最终请：
1. 完成代码修改；
2. 列出修改文件；
3. 列出所有尚需用户提供的 TODO；
4. 确认 GitHub Pages 构建没有明显错误；
5. 给出本地预览和发布步骤。
```

---

# 30. V1 验收标准

主页只有满足以下条件才算 V1 完成：

- [ ] `https://excellenthh.github.io` 可以访问；
- [ ] 手机与 PC 布局正常；
- [ ] 左侧头像和身份信息正确；
- [ ] 首页第一屏可以明确看出 Applied Cryptography × Trustworthy AI；
- [ ] 页面明确出现 LLM Security / Agent Security；
- [ ] Energy 作为应用拓展方向出现，但不抢主线；
- [ ] PVMark 有独立 Featured Research；
- [ ] 三篇 Selected Publications 都有统一 card；
- [ ] 两项专利正确；
- [ ] Best Poster Award 正确；
- [ ] 招生信息清晰；
- [ ] 所有按钮没有死链；
- [ ] 没有 lorem ipsum；
- [ ] 没有 demo 作者信息；
- [ ] 没有空的 Talks / Internship 等栏目；
- [ ] 未发表研究方向没有被写成已有成果；
- [ ] CV / Poster / Slides 文件可以正常打开。

---

# 31. 已核验的公开信息与参考链接

以下信息可作为 Codex 或后续人工核验的公开来源。

## GitHub Pages

GitHub Pages 官方说明：

- 用户站点使用 `<username>.github.io`；
- 用户名含大写字母时 repo 名应使用小写；
- 可从 repository 直接部署静态网站 / Jekyll。

参考：

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## AcadHomepage

Template：

- https://github.com/RayeRen/acad-homepage.github.io

该模板 README 说明：
- 支持 Google Scholar citation crawler；
- Google Analytics；
- Responsive layout；
- SEO；
- `_config.yml` 配置个人信息；
- `_pages/about.md` 维护主页正文；
- 可直接 fork 并部署到 `USERNAME.github.io`。

## ECUST 官方主页

- https://faculty.ecust.edu.cn/cise/dhh/main.htm

公开可核验：
- 段皓铧；
- 讲师；
- 硕士生导师；
- 华东理工大学信息科学与工程学院；
- `duanhaohua@ecust.edu.cn`；
- 新型计算机网络；
- 吉林大学本科；
- 上海交通大学博士；
- 2025 年入职华东理工大学。

## PVMark

USENIX：

- https://www.usenix.org/conference/usenixsecurity26/presentation/duan

可核验：
- title；
- author list；
- USENIX Security 2026；
- PVMark uses ZKP to make LLM watermark detection publicly verifiable without disclosing the secret key；
- implementation covers multiple watermark schemes / hashes / ZKP protocols。

## TDSC 2024

DOI：

`10.1109/TDSC.2024.3369658`

DBLP：

- https://dblp.org/rec/journals/tdsc/DuanPXHL24.html

## TIFS 2023

DOI：

`10.1109/TIFS.2023.3288454`

DBLP：

- https://dblp.org/rec/journals/tifs/DuanXWCZ23.html

## Patent 1

**CN119577708B**

- https://patents.google.com/patent/CN119577708B/en

公开记录显示：
- inventors: 向立瑶、段皓铧；
- granted: 2025-09-19。

## Patent 2

**CN119579975B**

- https://patents.google.com/patent/CN119579975A/en

公开记录显示：
- inventors: 向立瑶、段皓铧；
- granted: 2025-11-04。

## CCSC 2026

大会官方：

- https://conf.ccss.org.cn/ccsc2026/

公开信息显示：
- 第一届中国网络空间安全大会；
- 2026-09-18 至 2026-09-20；
- 安徽合肥；
- 中国网络空间安全学会主办；
- 中国科学技术大学承办。

Best Poster Award 的具体获奖条目建议发布前使用奖状或正式通知再次核验。

---

# 32. 最终核心结论

这个主页不能按照“我目前可展示东西不多”的思路来设计。

目前最值得放大的优势其实已经非常清楚：

1. **三篇高质量 Selected Publications**  
   形成 ZKP → Verifiable ML → Verifiable LLM 的连续研究轨迹。

2. **PVMark 作为 anchor work**  
   同时拥有 Paper / Code / Slides / Poster / Patent / Award 多维度证据。

3. **两项授权专利**  
   展现技术转化与应用能力。

4. **Best Poster Award**  
   展现额外同行认可。

5. **应用密码学技术底座 + AI Security 研究对象**  
   兼顾学术辨识度与学生招生吸引力。

6. **未来方向有明确扩展逻辑**  
   LLM Security → Agent Security → Data Security & Privacy for Energy Systems，
   而不是简单追逐若干热门关键词。

因此主页最终需要给访客留下的核心印象是：

> **Haohua Duan works at the intersection of applied cryptography and trustworthy AI, with a strong foundation in zero-knowledge proofs and an emerging focus on secure and verifiable LLMs, AI agents, and data-intensive intelligent systems.**
