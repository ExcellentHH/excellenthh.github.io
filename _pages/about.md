---
permalink: /
title: "Haohua Duan | 段皓铧"
description: "Applied Cryptography × Trustworthy AI. Research in zero-knowledge proofs, verifiable computation, and secure, private, and verifiable intelligent systems."
author_profile: true
analytics: false
redirect_from:
  - /about/
  - /about.html
---

# About Me
{: #about-me }

I am a Lecturer at the School of Information Science and Engineering, [East China University of Science and Technology (ECUST, 华东理工大学)](https://faculty.ecust.edu.cn/cise/dhh/main.htm). I received my Ph.D. degree from Shanghai Jiao Tong University, advised by [Prof. Liyao Xiang][liyao-xiang] and [Prof. Xinbing Wang][xinbing-wang]. Previously, I received my B.S. degree from Jilin University, where I was part of the [Tang Aoqing Program][tang-aoqing-program] (Computer Science). During my undergraduate studies, I also spent time studying in Prof. [En Wang][en-wang]'s lab.

My research connects **applied cryptography and trustworthy AI**, with **zero-knowledge proofs and verifiable computation** as its technical foundation. My work spans cryptographic proof systems, verifiable and privacy-preserving machine learning, and publicly verifiable LLM watermarking. Building on this foundation, my current focus is **LLM security and AI agent security**, with the goal of making intelligent systems secure, private, and verifiable.

<p class="research-vision">My research aims to make the behavior and outputs of AI systems verifiable while protecting sensitive data.</p>

I am always looking for **self-motivated undergraduate and graduate students** who are interested in **LLM security, trustworthy machine learning, information security, and privacy protection**. If you are interested, please contact me at <span class="email-address">{{ site.author.email | replace: '@', ' [at] ' | replace: '.', ' [dot] ' }}</span>.

# Education & Experience
{: #education-experience }

- **2025.09 – Present** · Lecturer, East China University of Science and Technology.
- **2020.09 – 2025.06** · Ph.D., Shanghai Jiao Tong University.<br>
  Advisors: **[Prof. Liyao Xiang][liyao-xiang]** and **[Prof. Xinbing Wang][xinbing-wang]**.
- **2016.09 – 2020.06** · B.S., Jilin University.<br>
  [Tang Aoqing Program][tang-aoqing-program] (Computer Science).

# Research Interests
{: #research-interests }

### Zero-Knowledge Proofs & Verifiable Computation

I study efficient and practical **zero-knowledge proofs and verifiable computation**. These methods provide a foundation for checking computational correctness while protecting private information, supporting my work on verifiable machine learning and LLM watermarking.

### Trustworthy AI, LLM & Agent Security

Building on this cryptographic foundation, I aim to develop methods for verifying the outputs and actions of **large language models and AI agents** while preserving privacy. This direction connects publicly verifiable watermarking and the provenance of AI-generated content with broader questions of **LLM security and AI agent security**.

### Application Focus: Energy & Power Systems

As an application direction for this research, I plan to explore **energy and power systems**, with an emphasis on **data security and privacy** and the **secure, trustworthy use of LLMs and AI agents**. The goal is to support data sharing and intelligent decision-making in these settings while protecting sensitive information and enabling verification of AI outputs and actions.

# News
{: #news }

- **2026.09**: Our PVMark poster received the **Best Poster Award (最佳海报)** at the China Cyber Security Congress (CCSC 2026).
- **2026.08**: Presented **PVMark** at **USENIX Security 2026**.
- **2026.06**: Our paper **PVMark** was accepted by **USENIX Security 2026**.
- **2025.09**: Joined East China University of Science and Technology as a Lecturer.
- **2025.06**: Graduated from Shanghai Jiao Tong University with a **Ph.D. in Engineering**.
- **2024.01**: Our paper **A Verifiable and Privacy-Preserving Federated Learning Training Framework** was accepted by **IEEE TDSC**.
- **2023.06**: Our paper **A New Zero Knowledge Argument for General Circuits and Its Application** was accepted by **IEEE TIFS**.

# Selected Publications
{: #selected-publications }

<p class="research-story">Zero-Knowledge Proofs → Verifiable Machine Learning → Publicly Verifiable Generative AI</p>

{% if site.author.googlescholar or site.author.dblp %}
<p>Full publication list: {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}">Google Scholar (author search)</a>{% endif %}{% if site.author.googlescholar and site.author.dblp %} · {% endif %}{% if site.author.dblp %}<a href="{{ site.author.dblp }}">DBLP</a>{% endif %}.</p>
{% else %}
<p class="todo-note">TODO: Google Scholar / DBLP profile links for the full publication list.</p>
{% endif %}

{% for publication in site.data.publications %}
{% include paper-card.html paper=publication %}
{% endfor %}

<p class="publication-note"><sup>*</sup> Corresponding author.</p>

# Honors & Awards
{: #honors-awards }

- **Best Poster Award (最佳海报)**, China Cyber Security Congress (CCSC), 2026.<br>
  *PVMark: Enabling Public Verifiability for LLM Watermarking Schemes*.

{% include award-certificate.html award=site.data.awards.pvmark %}

# Patents
{: #patents }

### Publicly Verifiable Large Language Model Watermark Detection Method and System
{: #patent-pvmark }

可公开验证的大语言模型水印检测方法及系统<br>
**CN119577708B** · Granted: **2025-09-19**<br>
Inventors: Liyao Xiang, **Haohua Duan**<br>
[Patent record](https://patents.google.com/patent/CN119577708B/en) · [Related research: PVMark](#publication-pvmark)

### Machine Learning Image Classification Model Ownership Verification Method and System
{: #patent-model-ownership }

机器学习图像分类模型所有权验证方法及系统<br>
**CN119579975B** · Granted: **2025-11-04**<br>
Inventors: Liyao Xiang, **Haohua Duan**<br>
[Patent record](https://patents.google.com/patent/CN119579975B/en)

# Teaching
{: #teaching }

- **New Computer Networks（新型计算机网络）**<br>
  Instructor, East China University of Science and Technology · **Fall 2026 (current semester)**.
- **CS149 Data Structure and Algorithms（数据结构与算法）**<br>
  Teaching Assistant, Shanghai Jiao Tong University · **Fall 2022**.

[liyao-xiang]: https://xiangliyao.cn/
[xinbing-wang]: https://www.cs.sjtu.edu.cn/~wang-xb/
[en-wang]: https://teachers.jlu.edu.cn/WE/zh_CN/index.htm
[tang-aoqing-program]: https://sflc.jlu.edu.cn/en/Teaching/Undergraduates.htm
