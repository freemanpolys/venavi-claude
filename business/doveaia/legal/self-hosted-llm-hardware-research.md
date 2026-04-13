# Self-Hosted LLM Hardware Research for Law Firm
**Date: 2026-03-31**

---

## Executive Summary

This research covers hardware options for self-hosting LLMs (Qwen3, Mistral, Llama) on-premise for a law firm. The key finding is that **RTX 40-series GPUs are now discontinued** on major French retailers (LDLC shows 0 stock for RTX 4060 Ti 16GB and RTX 4070 Ti Super). The market has shifted to RTX 50-series and Apple Silicon. Two standout options emerge:

1. **Apple Mac Mini M4 Pro 48GB** (~1,900-2,300 EUR) — best value for quiet, compact LLM inference
2. **Custom desktop with RTX 5070 12GB** (GPU: 690-920 EUR) — better raw performance but more complex setup
3. **Lenovo ThinkStation PGX** ($3,539 / ~3,300 EUR) — purpose-built for LLM with 128GB unified memory, runs 200B models

---

## 1. Mini-PCs & Compact Workstations

### Apple Mac Mini M4 Pro (STRONG RECOMMENDATION)

| Spec | Detail |
|------|--------|
| CPU | Apple M4 Pro (12-core or 14-core) |
| GPU | Integrated 16-core or 20-core GPU |
| RAM | 24GB / 48GB / 64GB unified memory |
| Memory bandwidth | 273 GB/s |
| Connectivity | 3x Thunderbolt 5, HDMI, 10Gb Ethernet option |
| Noise | Near-silent under LLM workloads (~40W draw) |
| Price (FR) | From 1,899 EUR (24GB), ~2,300 EUR (48GB), up to 5,500 EUR (64GB/14-core) |
| Buy | [Apple France](https://www.apple.com/fr/shop/buy-mac/mac-mini) |

**LLM Performance:**
- 48GB: Runs 70B quantized models (Q3/Q4) at 5-7 tok/s, 30B models at 12-18 tok/s
- 64GB: Runs 70B models comfortably at Q4/Q5
- Ollama works natively, zero config
- 27% faster than dual RTX 3090s for LLM inference (unified memory eliminates PCIe bottleneck)
- ~25 EUR/year electricity

**Why ideal for a law firm:** Silent, tiny, no IT maintenance, macOS security, just install Ollama and go.

---

### Intel NUC 13 Pro

| Spec | Detail |
|------|--------|
| CPU | Intel Core i5-1340P or i7-1360P (12C/16T) |
| RAM | Up to 64GB DDR4 |
| Connectivity | Thunderbolt 4 (for eGPU) |
| Price (FR) | Barebone: ~350-500 EUR (LDLC), Configured: 450-700 EUR (Amazon.fr) |

**Links:**
- [LDLC NUC13ANHi7](https://www.ldlc.com/en/product/PB00555097.html)
- [Amazon.fr i7/32GB/1TB](https://www.amazon.fr/Mini-PC-processeur-i7-1360P-Graphiques-Thunderbolt/dp/B0C1SC59SB)

**LLM verdict:** CPU-only inference = 1-5 tok/s. Needs eGPU to be useful for LLM. Good as a server chassis with Thunderbolt eGPU.

---

### GEEKOM IT15

| Spec | Detail |
|------|--------|
| CPU | Intel Core Ultra 9 285H (24 threads) |
| GPU | Intel Arc 140T (99 TOPS NPU) |
| RAM | 32GB or 64GB DDR5 |
| Connectivity | USB4, Wi-Fi 7 |
| Price (FR) | 949 EUR (promo) to 1,499 EUR |
| Buy | [GEEKOM France](https://www.geekom.fr/geekom-mini-it15-mini-pc/) |

**LLM verdict:** The NPU provides some AI acceleration but is not comparable to a dedicated GPU for LLM inference. Best as a general-purpose mini PC with USB4 for eGPU.

---

### Minisforum MS-S1 MAX (HIGH-END)

| Spec | Detail |
|------|--------|
| CPU | AMD Ryzen AI Max+ 395 (16C/32T, Zen5) |
| GPU | Integrated RDNA 3.5 (RTX 4060-class performance) |
| RAM | 128GB LPDDR5x-8000 (unified, shared with GPU) |
| NPU | 126 TOPS |
| Connectivity | Dual 10GbE, USB4 V2, dual M.2 PCIe 4.0 |
| Price (FR) | **3,119 EUR** (discounted from 3,899 EUR) |
| Status | Currently out of stock, shipping from Germany mid-April |
| Buy | [Minisforum France](https://minisforumpc.fr/products/minisforum-ms-s1-max) |

**LLM verdict:** 128GB unified memory can run very large models (80B+ MoE at 40-60 tok/s reported). Comparable to Mac Studio in concept. Excellent for LLM but expensive and limited availability.

---

### Lenovo ThinkStation PGX (PURPOSE-BUILT FOR LLM)

| Spec | Detail |
|------|--------|
| Chip | NVIDIA GB10 Grace Blackwell Superchip |
| CPU | 20-core Arm (10x Cortex-X925 + 10x Cortex-A725) |
| GPU | 6,144 CUDA cores, 192 Tensor Cores (5th gen) |
| RAM | 128GB LPDDR5X unified (273 GB/s) |
| Size | Mac Mini-sized (~150x150x50mm, 1.2kg) |
| Connectivity | 10Gb Ethernet, Wi-Fi 7, 3x USB4, HDMI 2.1a |
| Power | Max 240W via USB-C |
| Price | ~3,539 USD (~3,300 EUR) |
| OS | DGX OS (Ubuntu-based), pre-installed CUDA 13, TensorRT |
| Buy | [Lenovo](https://www.lenovo.com) |

**LLM Performance (reviewed by XDA Developers):**
- Qwen3-Coder-Next 80B (FP8): 25-40 tok/s with 170K context
- Step-3.5-Flash 196B (Q4): ~20 tok/s with 140K context
- Fine-tuning Qwen2.5-7B with LoRA: 18 minutes on 5,000 samples
- Rated 9/10 by reviewer
- "Incredibly quiet throughout" testing

**Source:** [XDA Developers Review](https://www.xda-developers.com/lenovo-thinkstation-pgx-review/)

---

### Lenovo ThinkStation P3 Tiny

| Spec | Detail |
|------|--------|
| CPU | Intel Core i7-13700T (16C) or Core Ultra 7 265 (Gen 2) |
| GPU | NVIDIA Quadro T600/T1000 (4GB) or RTX A1000 (8GB) |
| RAM | Up to 64GB DDR5 |
| Size | 1 liter |
| Price (FR) | From 999 EUR to 2,641 EUR depending on config |
| Buy | [Lenovo France](https://www.lenovo.com/fr/fr/p/workstations/thinkstationp/thinkstation-p3-tiny-workstation/30h0cto1wwfr2), [idealo.fr](https://www.idealo.fr/prix/203116683/lenovo-thinkstation-p3-tiny.html) |

**LLM verdict:** The integrated Quadro GPUs (4-8GB VRAM) are too small for serious LLM inference. This is a professional workstation, not an LLM machine. Skip for this use case unless paired with eGPU.

---

### HP Z2 Mini G9

| Spec | Detail |
|------|--------|
| CPU | Intel Core i7/i9 (13th gen) |
| GPU | NVIDIA T1000 (4GB) or RTX A2000 (6GB) |
| Price (FR) | From 1,695 EUR |
| Buy | [idealo.fr](https://www.idealo.fr/prix/202127531/hp-z2-mini-g9-workstation.html) |

**LLM verdict:** Same problem as ThinkStation P3 Tiny — low VRAM GPUs. Not suitable for LLM without eGPU.

---

### Dell Precision 3280 Compact

| Spec | Detail |
|------|--------|
| CPU | Intel Core i7-14700 (20C/28T) |
| GPU | NVIDIA T1000 (8GB GDDR6) |
| Size | 8.11 x 3.12 x 7 inches |
| Status | Currently **unavailable** on Dell France |
| Buy | [Dell France](https://www.dell.com/fr-fr/shop/desktops/nouvelle-3280-compact/spd/precision-3280-workstation) |

---

## 2. GPUs for LLM Inference

### IMPORTANT: RTX 40-series discontinued on French retailers

LDLC shows **0 units in stock** for both RTX 4060 Ti 16GB and RTX 4070 Ti Super. These have been replaced by RTX 50-series. Available options:

### Currently Available NEW (LDLC, March 2026)

#### RTX 5070 12GB GDDR7 — Best Current Value for LLM

| Model | Price (EUR) | Notes |
|-------|-------------|-------|
| MSI RTX 5070 12G GAMING TRIO OC | 689.95 | Cheapest |
| Gainward RTX 5070 Python III | 749.95 | Good value |
| ASUS Dual RTX 5070 12GB OC | 749.95 | Reliable |
| Gigabyte RTX 5070 WINDFORCE OC SFF | 769.95 | Small form factor |
| ASUS TUF Gaming RTX 5070 12GB OC | 869.95 | Premium build |
| ASUS ROG Strix RTX 5070 12GB OC | 879.95 | High-end |

**LLM capability (12GB VRAM):** Runs 7B-8B models natively, 13B models with 4-bit quantization. DLSS 4 / Blackwell architecture. PCIe 5.0.

**Buy:** [LDLC RTX 5070 page](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126521.html)

#### RTX 5060 8GB GDDR7 — Budget Entry

| Model | Price (EUR) |
|-------|-------------|
| Gainward RTX 5060 Ghost 8GB | 379.95 |
| MSI RTX 5060 8G VENTUS 2X OC | 389.95 |
| ASUS Dual RTX 5060 OC 8GB | 389.95 |
| Gigabyte RTX 5060 WINDFORCE OC 8G | 389.95 |

**LLM capability (8GB VRAM):** Only suitable for 7B models with aggressive quantization. Too limited for serious LLM use.

**Buy:** [LDLC RTX 5060 page](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126766.html)

### Secondhand Market (leboncoin.fr, Rakuten)

| GPU | Used Price (EUR) | VRAM | LLM Capability |
|-----|-----------------|------|-----------------|
| RTX 4060 Ti 16GB | 250-450 | 16GB | 13-30B models at Q4. Sweet spot for budget LLM. |
| RTX 4070 Ti Super | ~800 | 16GB | Same VRAM but faster inference. |
| RTX 3060 12GB | ~150-200 | 12GB | 7B-13B models. Budget option. |
| RTX 3090 24GB | ~500-700 | 24GB | **Best used market value.** Runs 30B at Q4, 70B with heavy quantization. |
| RTX 4090 24GB | ~1,200-1,500 | 24GB | Top consumer GPU. 30-40B models comfortably. |

**Recommendation:** If going secondhand, the **RTX 3090 (24GB)** is the best value — 80% of RTX 4090 performance for half the price.

### GPU VRAM Guide for LLMs

| VRAM | Model Size | Example Models |
|------|-----------|----------------|
| 8GB | 7B (Q4) | Mistral 7B, Qwen2.5-7B |
| 12GB | 7-13B (Q4) | Llama 3.1 8B, Mistral 7B (full), CodeLlama 13B (Q4) |
| 16GB | 13-30B (Q4) | Qwen2.5-32B (Q4), Mistral Medium, Llama 3.1 13B |
| 24GB | 30-70B (Q4) | Llama 3.1 70B (Q3/Q4), Qwen3-72B (Q4), DeepSeek-V2 |
| 32GB+ | 70B+ (Q4-Q8) | Llama 3.1 70B (Q5+), Mixtral 8x22B |

**Rule of thumb:** ~0.5GB VRAM per billion parameters at 4-bit quantization.

---

## 3. eGPU Enclosures

### Razer Core X V2 (Thunderbolt 5) — Available on LDLC

| Spec | Detail |
|------|--------|
| Connection | Thunderbolt 5 (backward compatible TB4/USB4) |
| PSU | ATX (not included) |
| GPU support | Up to 4-slot, max 362.7 x 185.1 x 82mm |
| Laptop charging | 140W via USB-C |
| Cooling | 120mm active fan |
| Dimensions | 421 x 216 x 197mm |
| Weight | 3.9 kg |
| Price (FR) | **409.95 EUR** |
| Status | Currently sold out on LDLC |
| Buy | [LDLC](https://www.ldlc.com/en/product/PB00718562.html) |

### Other eGPU Options (International Pricing)

| Enclosure | Price (USD) | Thunderbolt | PSU | Max GPU Power | Notes |
|-----------|-------------|-------------|-----|---------------|-------|
| AOOSTAR AG02 / GTBOX G-DOCK | $249-269 | USB4v1 | 800W internal | 650W | Best budget option |
| EXP GDC TH3P4G3 | $120 + case | TB3 | ATX external | Unlimited | Cheapest, DIY |
| ADT-Link UT3G/UT4G | $120 | USB4v1 | External ATX | Unlimited | Minimal footprint |
| Razer Core X (TB3, older) | ~$300 / ~300 EUR | TB3 | 650W internal | 500W | Solid build quality |
| Sonnet Breakaway Box 750ex | $350 | TB3 | 750W internal | 475W | Professional quality |
| Mantiz Saturn Pro | $299 | TB3 | 750W SFX | 550W | Good value premium |

**Source:** [eGPU.io Buyer's Guide](https://egpu.io/best-egpu-buyers-guide/)

### Important eGPU Caveat

Thunderbolt 3/4 provides PCIe 3.0 x4 bandwidth (~32 Gbps) — this means **~25-30% performance loss** vs direct PCIe for GPU-bound tasks. For LLM inference this is less critical since inference is memory-bandwidth-bound, not PCIe-bound. OCuLink-equipped mini PCs (like some Minisforum models) provide better direct PCIe connectivity.

---

## 4. Complete Pre-Built Options with GPU

### Lenovo ThinkStation P5 Gen 2 (Full Desktop)

| Spec | Detail |
|------|--------|
| CPU | Intel Xeon 600 (up to 48 cores) |
| GPU | Up to 2x NVIDIA RTX Pro 6000 Blackwell (96GB each) |
| RAM | Up to 1TB DDR5 |
| Availability | April-June 2026 |

This is enterprise-grade and likely overkill/overpriced for a law firm.

### Recommended Complete Builds

#### Option A: "Plug and Play" (Simplest)
- **Mac Mini M4 Pro 48GB** — ~2,300 EUR
- Install Ollama, load models, done
- Runs: Qwen2.5-32B, Mistral Medium, Llama 3.1 70B (Q3)

#### Option B: "Power User" (Best Performance/EUR)
- Any mid-tower PC case + ATX PSU
- Used RTX 3090 24GB — ~600 EUR on leboncoin
- Intel i5-13400 or AMD Ryzen 5 7600 — ~200 EUR
- 32GB DDR5 — ~80 EUR
- 1TB NVMe — ~70 EUR
- Total: ~1,100-1,200 EUR
- Runs: Llama 3.1 70B (Q4), Qwen3-72B (Q4), any 30B model at full speed

#### Option C: "Compact + Powerful"
- Intel NUC 13 Pro i7 — ~500 EUR
- Razer Core X V2 eGPU — 410 EUR
- Used RTX 3090 or new RTX 5070 — 600-750 EUR
- Total: ~1,500-1,660 EUR
- Compact but requires eGPU enclosure on desk

#### Option D: "No Compromise Compact"
- **Lenovo ThinkStation PGX** — ~3,300 EUR
- 128GB unified memory, purpose-built for LLM
- Mac Mini-sized, silent
- Runs 200B+ parameter models
- NVIDIA CUDA ecosystem native

#### Option E: "Maximum Local Power"
- **Minisforum MS-S1 MAX** — 3,119 EUR
- 128GB unified LPDDR5x
- RTX 4060-class integrated GPU
- Runs 80B+ MoE models at 40-60 tok/s

---

## 5. Community Opinions & Enterprise Advice

### From Blog Research and Reviews

**Performance Reality Check:**
- GPU inference: 20-40+ tokens/second (usable, interactive)
- CPU-only inference: 1-5 tokens/second (painful, barely usable)
- Model in VRAM = 10x faster than offloading to system RAM
- Ollama peaks at ~41 tok/s; vLLM reaches ~793 tok/s for production

**When Self-Hosting Makes Sense for a Law Firm:**
1. Attorney-client privilege — data never leaves the network
2. GDPR compliance — zero third-party data transfer
3. Predictable cost — no per-token API charges
4. Offline capability — works without internet

**When It Does NOT Make Sense:**
- Processing < 2M tokens/day (APIs are cheaper)
- No IT staff to manage infrastructure
- Need frontier model quality (GPT-4/Claude-level)

**Breakeven Point:** ~2 million tokens/day. Below that, API access is more cost-effective.

**Hybrid Approach (Recommended for Law Firms):**
Route simple queries (summarization, extraction) to local 7-13B models, reserve API calls for complex reasoning. Reported 40-70% cost reduction vs all-API approach.

### Gotchas & Warnings

1. **Quantization quality:** 4-bit quantization reduces model size by 75% with "minimal quality loss" but for legal work, test carefully — subtle reasoning errors can occur
2. **Context length vs speed tradeoff:** Long conversations (10K+ tokens) degrade performance due to KV cache growth
3. **Concurrency:** One user at a time on consumer hardware. Multi-user requires enterprise GPUs or multiple machines
4. **Updates:** Self-hosted means YOU manage model updates, security patches, driver updates
5. **Power/cooling:** A desktop with RTX 4090 draws 300-450W and is audible. Mac Mini draws 40W and is silent
6. **Legal-specific models:** Look into fine-tuning on French legal corpus for best results

### Recommended Software Stack

| Tool | Use Case |
|------|----------|
| [Ollama](https://ollama.com) | Simplest setup, one-command model download and serve |
| [LM Studio](https://lmstudio.ai) | GUI for non-technical users |
| [vLLM](https://vllm.ai) | Production serving with high concurrency |
| [Open WebUI](https://openwebui.com) | ChatGPT-like web interface for Ollama |
| [EXO](https://github.com/exo-explore/exo) | Pool VRAM across multiple devices |

### Recommended Models for Legal Use

| Model | Parameters | Min VRAM (Q4) | Strengths |
|-------|-----------|---------------|-----------|
| Qwen2.5-32B | 32B | 16GB | Excellent reasoning, multilingual, French-capable |
| Mistral Medium / Large | 22-123B | 12-64GB | French company, strong French language support |
| Llama 3.1 70B | 70B | 35GB | Best open-weight general model |
| DeepSeek-V2 | 236B MoE | 24GB | MoE = fast inference despite large size |
| Qwen3-Coder | 32B | 16GB | For contract analysis, structured extraction |

---

## 6. Final Recommendation for a Law Firm

### Best Overall: Mac Mini M4 Pro 48GB (~2,300 EUR)

**Why:**
- Silent (critical for an office/law firm environment)
- Tiny footprint (fits on a bookshelf)
- Zero IT maintenance (macOS + Ollama = 5 min setup)
- 48GB unified memory runs 30B models fluently, 70B models acceptably
- Thunderbolt 5 for future eGPU expansion
- ~25 EUR/year electricity
- Reliable (Apple hardware, no GPU driver issues)

**Setup:** Install Ollama -> `ollama pull qwen2.5:32b` -> Install Open WebUI -> Give lawyers a ChatGPT-like interface pointing to local model. Done.

### Runner-Up: Lenovo ThinkStation PGX (~3,300 EUR)

If the firm needs to run larger models (70B+) at good speed, the PGX with 128GB unified memory and NVIDIA CUDA support is purpose-built for this. More complex setup (Linux/Ubuntu) but dramatically more capable.

### Budget Option: Used Desktop + RTX 3090 (~1,200 EUR)

Best performance per euro but noisier, larger, and requires more IT knowledge. Good if there is a server room or closet to put it in.

---

## Sources

- [LDLC RTX 5070](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126521.html)
- [LDLC RTX 5060](https://www.ldlc.com/en/computing/components/graphics-card/c4684/+fv121-126766.html)
- [LDLC Razer Core X V2](https://www.ldlc.com/en/product/PB00718562.html)
- [eGPU.io Buyer's Guide](https://egpu.io/best-egpu-buyers-guide/)
- [Self-Hosted LLM Guide 2026 (PremAI)](https://blog.premai.io/self-hosted-llm-guide-setup-tools-cost-comparison-2026/)
- [Best GPU for Local LLMs 2026 (DecodesFuture)](https://www.decodesfuture.com/articles/best-gpu-for-local-llms-2026-guide)
- [Lenovo ThinkStation PGX Review (XDA)](https://www.xda-developers.com/lenovo-thinkstation-pgx-review/)
- [Minisforum MS-S1 MAX](https://minisforumpc.fr/products/minisforum-ms-s1-max)
- [Mac Mini M4 Pro Review](https://minipc-review.com/en/apple-mac-mini-m4-pro-review)
- [Mac Mini M4 Pro LLM Benchmarks](https://like2byte.com/mac-mini-m4-pro-64gb-30b-llm-benchmarks/)
- [Local LLM Hardware Guide 2025 (Introl)](https://introl.com/blog/local-llm-hardware-pricing-guide-2025)
- [LLM On-Premise for Law Firms (NovumLogic)](https://www.novumlogic.com/blog/how-can-law-firms-deploy-a-fully-private-secure-and-efficient-legal-ai-solution)
- [Private LLM for Legal (Spellbook)](https://www.spellbook.legal/learn/most-private-ai)
- [Apple France Mac Mini](https://www.apple.com/fr/shop/buy-mac/mac-mini)
- [GEEKOM IT15 France](https://www.geekom.fr/geekom-mini-it15-mini-pc/)
- [Lenovo ThinkStation P3 Tiny (idealo)](https://www.idealo.fr/prix/203116683/lenovo-thinkstation-p3-tiny.html)
- [HP Z2 Mini G9 (idealo)](https://www.idealo.fr/prix/202127531/hp-z2-mini-g9-workstation.html)
- [Leboncoin RTX 4070 Ti Super](https://www.leboncoin.fr/ck/ordinateurs/rtx-4070-ti-super)
