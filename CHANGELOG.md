
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
