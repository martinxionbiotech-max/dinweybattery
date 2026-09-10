# Sources — Battery Master Data Model Expansion (JIS/DIN/BCI)

Research date: 2026-09-09. Purpose: expand `battery-master-data.json` model coverage
from 7 to 14 heavy-duty truck battery models. All third-party entries are marked
`verification_status: reference` (never `confirmed_first_party`, which is reserved
for DINWEYS first-party datasheets).

## Source Registry

| ID | Title | URL | Publisher | Tier | Notes |
|----|-------|-----|-----------|------|-------|
| S01 | BRAVA N70 (65D31R) 12V 70Ah SMF battery | https://www.bravabatteries.com/product/n70-65d31r-12v70ah-smf-car-battery | BRAVA Batteries | 2 | N70: 70Ah C20, CCA 580A (JIS), RC 118min, 304×170×203mm (TH 225) |
| S02 | Western Battery N70-65D31R | http://www.western-battery.com/Product/show/id/258.html | Western Battery | 3 | N70: 70Ah, 600A (EN), 304×173×200mm |
| S03 | BCI Group Sizes PDF | https://batterycouncil.org/wp-content/uploads/2023/10/BCI-Group-Sizes.pdf | Battery Council International | 1 | Group 27 = 65D31R (306×173×225); Group 29H = 95E41R (410×176×234) |
| S04 | Sebang JIS catalog | https://sebangbattery.com/applications-product/jis | Sebang (Global Battery) | 2 | N100 (95E41R) 100Ah/730A/410×175×235; N120 120Ah/820A/505×183×240 |
| S05 | Continental Group N120 | https://www.continentalbattery.com/continental-n120-commercial-battery-group-n120-12v-battery | Continental Battery | 2 | N120: CCA 880, 505×181×257mm (19.88×7.13×10.13 in) |
| S06 | UPLUS JIS catalog | https://www.uplusbattery.com/Product/150.html | UPLUS Battery | 3 | 245H52 (N220): 220Ah/1200A/515×265×216mm (TH 254); also N150/N200 reference |
| S07 | Powsea 245H52 | https://powseabattery.com/battery/245h52 | Powsea Battery | 3 | 245H52 = N220, 12V 220Ah |
| S08 | King Power DIN66 (56638) | https://westernbattery.en.made-in-china.com/product/qwDTvZFHfAUt/China-DIN66-56638-Maintenance-Free-Calcium-Plus-Mf-Car-Battery-12V-66ah.html | King Power (made-in-china) | 3 | DIN66: 66Ah, 278×174×189mm |
| S09 | Xiamen Songli DIN series | https://songli-group.en.made-in-china.com/product-group/gMwGqHKurLVX/Din-Standard-Series-1.html | Xiamen Songli Battery | 3 | DIN66 (56638mf) 66Ah; DIN74 (57512mf) 74Ah |
| S10 | Landport 57412 (DIN74) | https://www.landportbv.com/en/products/accu-57412 | Landport Batteries | 2 | DIN74: 74Ah C20, CCA 680A (EN), 278×175×190mm |
| S11 | Marvel Battery 57412 | https://www.marvel-battery.com/product/57412-74ah | Marvel Battery | 3 | DIN74: 74Ah, 277×174×188mm, 17.8kg |
| S12 | Crown Battery specifications | https://www.crownbattery.com/hs-fs/hub/435823/file-2178587259.pdf | Crown Battery | 2 | BCI Group 4D/8D/31 heavy-duty commercial reference |
| S13 | Raybuck Automotive Battery Dimensions | https://raybuck.com/automotive-battery-dimensions | Raybuck Auto Body | 3 | BCI 4D 527×222×250; 6D 527×254×260; 8D 527×283×250 |

## Verification Notes

- **JIS N70** (65D31R): capacity 70Ah (C20) and CCA 580A (JIS) from S01; 600A (EN)
  from S02. Dimensions reported 303–306 × 170–173 × 201–225mm across S01/S02/S03.
  Recorded at the BCI Group 27 max envelope (306×173×225mm) with source variance
  noted in the model record.
- **JIS N100** (95E41R): 100Ah / 730A / 410×175×235mm (S04); BCI max envelope
  410×176×234mm (S03). Third-party CCA varies ~700–870A.
- **JIS N120**: 120Ah / 820A / 505×183×240mm (S04); CCA 880A at 505×181×257mm (S05).
  Height varies 208–257mm across manufacturers — flagged in record.
- **JIS N220** (245H52): 220Ah / 1200A / RC 456 / 515×265×216mm (TH 254) (S06);
  12V 220Ah (S07).
- **DIN66** (56638): 66Ah (C20), 278×175×190mm (S08 278×174×189). EN CCA not found
  in a single authoritative source → left `null`.
- **DIN74** (57412): 74Ah (C20), CCA 680A (EN), 278×175×190mm (S10); 277×174×188mm
  (S11). Third-party CCA range ~580–690A (EN).
- **BCI Group 6D**: reference only; 527×254×260mm max envelope (S13). DINWEYS
  made-to-order (`on_request`) — no published stock rating.

## Cross-Reference Conflicts

- N120 height varies widely (208–257mm) between S04 and S05 — this reflects
  different manufacturers' case heights for the same "N120" class; recorded as a
  variance note, not a single authoritative figure.
- DIN66/DIN74 share the 278mm length class; capacity (66 vs 74Ah) is the primary
  differentiator, not case size.
