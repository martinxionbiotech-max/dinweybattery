
### Change Record: CR-20260910-001
- **Date & Timestamp:** 2026-09-10 02:58 UTC
- **Target URL / Asset Path:** 主站全站 + docs 子站
- **Change Classification:** P0 Integrity Repair（实体架构）
- **State Before Modification:** DINWEY 被系统性描述为 "OEM Factory / Manufacturer"（brand = factory 混同）
- **State After Modification:** DINWEY 统一为 "Heavy-Duty Truck & Starting Battery Brand"，制造商归 Chengguang Power Tech Co., Ltd.
- **Primary Technical Rationale:** spec §1.2 规则1 —— 禁止将品牌（DINWEY）误描述为制造主体；实体关系须为 DINWEY=品牌、Chengguang=制造商、Factory=Chengguang 设施
- **Supporting Evidence Citation:** V2.0 spec §1.1/§1.2
- **Risk Assessment & Mitigation:** 标题/描述变更可能短期影响 title 关键词信号，但 "OEM Factory" 实体误导是 E-E-A-T 硬伤，优先级更高；保留 "Truck & Heavy-Duty Starting Batteries" 核心词不变

### Change Record: CR-20260910-002
- **Date & Timestamp:** 2026-09-10 02:58 UTC
- **Target URL / Asset Path:** src/layouts/BaseLayout.astro（orgJsonLd）
- **Change Classification:** Schema Refactor（实体拆分）
- **State Before Modification:** 单一 Organization 同时 name=DINWEY + legalName=Chengguang + parentOrganization=Chengguang，hasCredential 挂 DINWEY 名下
- **State After Modification:** 拆为 DINWEY Organization（品牌，manufacturer 引用）+ Chengguang Organization（制造商，持有 hasCredential IATF/ISO）
- **Primary Technical Rationale:** spec §1.1 实体边界 —— 认证须归属真实制造主体
- **Supporting Evidence Citation:** V2.0 spec §1.1/§1.2
- **Risk Assessment & Mitigation:** JSON-LD 结构变更，Google 需重新抓取解析；新结构语义更正确，长期利好实体识别

### Change Record: CR-20260910-003
- **Date & Timestamp:** 2026-09-10 02:58 UTC
- **Target URL / Asset Path:** src/layouts/BaseLayout.astro（address）
- **Change Classification:** Data Normalization（地址矛盾）
- **State Before Modification:** streetAddress="...Jinzhou City" 但 addressLocality="Shijiazhuang"
- **State After Modification:** addressLocality="Jinzhou"（与 street 一致）
- **Primary Technical Rationale:** 消除自相矛盾；与姊妹站（drychillis/dingwei）地址口径一致
- **Supporting Evidence Citation:** 姊妹站地址字段比对
- **Risk Assessment & Mitigation:** 地址字段更精确，利于本地搜索实体一致性

### Change Record: CR-20260910-004
- **Date & Timestamp:** 2026-09-10 03:05 UTC
- **Target URL / Asset Path:** src/layouts/BatteryModelLayout.astro + src/layouts/ProductLayout.astro
- **Change Classification:** Schema Refactor（Product schema manufacturer 映射）
- **State Before Modification:** Product schema `manufacturer` 和 `author.worksFor` 指向 `#organization`（= DINWEY 品牌）
- **State After Modification:** 改为指向 `#manufacturer`（= Chengguang 制造商）
- **Primary Technical Rationale:** spec §1.1 — Product schema 必须 brand=DINWEY、manufacturer=Chengguang，实体拆分后映射需同步
- **Supporting Evidence Citation:** V2.0 spec §1.1/§7.2
- **Risk Assessment & Mitigation:** 纯 schema 语义修正，无可见内容变更

### Change Record: CR-20260910-005
- **Date & Timestamp:** 2026-09-10 03:05 UTC
- **Target URL / Asset Path:** src/pages/selection-tool/index.astro
- **Change Classification:** Schema Refactor（移除虚假 Offer）
- **State Before Modification:** WebApplication schema 含 `offers: { price: "0" }`（虚假定价）
- **State After Modification:** 移除 offers 字段
- **Primary Technical Rationale:** spec §7.2 — 禁止虚构 price/availability/offer
- **Supporting Evidence Citation:** V2.0 spec §7.2
- **Risk Assessment & Mitigation:** 免费工具不应有 Offer schema，移除后更准确

### Change Record: CR-20260910-006
- **Date & Timestamp:** 2026-09-10 03:05 UTC
- **Target URL / Asset Path:** public/data/battery-models.json（删除）+ public/data/evidence/（新增）
- **Change Classification:** Data Normalization（数据源统一）
- **State Before Modification:** 双数据源：battery-models.json（旧 4 型号）+ battery-master-data.json（14 型号）
- **State After Modification:** 删除孤儿 battery-models.json（无任何引用）；保留 battery-master-data.json 为唯一 SSOT；新增 evidence/sources.json（10 来源）+ evidence/claims.json（9 声明）
- **Primary Technical Rationale:** spec §2 — ONE FACT → ONE SSOT ENTRY → MANY RENDERED PAGES；禁止第二套数字
- **Supporting Evidence Citation:** V2.0 spec §2/§3
- **Risk Assessment & Mitigation:** 孤儿文件无引用，删除零影响；evidence 文件为新增

### Change Record: CR-20260910-007
- **Date & Timestamp:** 2026-09-10 03:05 UTC
- **Target URL / Asset Path:** src/pages/about/index.astro
- **Change Classification:** E-E-A-T（认证表述诚实化）
- **State Before Modification:** 认证表 "✅ Certified"（无证书编号/发证机构佐证）
- **State After Modification:** 改为 "Held by manufacturer" + 明确 "Certificate numbers, issuing bodies and validity are provided with quotations"
- **Primary Technical Rationale:** spec §1.2 规则2 — 无验证文档不得写 Certified
- **Supporting Evidence Citation:** V2.0 spec §1.2
- **Risk Assessment & Mitigation:** 弱化绝对化表述，避免被判定虚假认证，长期利好 E-E-A-T

### Change Record: CR-20260910-008
- **Date & Timestamp:** 2026-09-10 03:10 UTC
- **Target URL / Asset Path:** selection-tool / contact / about 页
- **Change Classification:** Internal Linking（语义链补链）
- **State Before Modification:** 3 个页面出链为 0（孤儿化）
- **State After Modification:** 补语义内链（Selection Tool→产品族/型号/OEM；Contact→工具/型号/OEM；About→产品族/工具/OEM）
- **Primary Technical Rationale:** spec §4 语义链 Knowledge→Product→Selection→OEM→RFQ
- **Supporting Evidence Citation:** V2.0 spec §4
- **Risk Assessment & Mitigation:** 纯内链补充，无内容变更

### Change Record: CR-20260910-009
- **Date & Timestamp:** 2026-09-10 03:19 UTC
- **Target URL / Asset Path:** src/pages/contact/index.astro
- **Change Classification:** Commercial Conversion（RFQ 表单 + Lead Qualification）
- **State Before Modification:** contact 页仅有 FAQ + 邮箱/WhatsApp，无结构化 RFQ 收集
- **State After Modification:** 新增 Lead Intent 分级表（Research→Product→Spec→OEM→RFQ）+ 结构化 RFQ 表单（Battery standard/Model/Voltage/Application/Quantity/Port/OEM/Additional 8 字段，mailto 提交）
- **Primary Technical Rationale:** spec §1/§2 — 结构化询盘提高 Lead 质量，Intent 分级路由
- **Supporting Evidence Citation:** V2.0 spec §1/§2
- **Risk Assessment & Mitigation:** 纯前端 mailto 表单，无后端，可回滚；不收集/存储任何 PII
