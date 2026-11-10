# Pranay Dogra

## Pranay Dogra

Engineering student at UC Berkeley.

I study EECS and Industrial Engineering & Operations Research. My current focus is mechanistic interpretability and tokenomics.

[What I’m working on ↗](https://pranaydogra.com/#research)

## Research

SEP 2026–PRESENT / CURRENT

### Dana Carney Lab

UC Berkeley Haas School of Business · Undergraduate researcher

I develop Python and PyTorch pipelines for multimodal behavioral analysis, extracting facial, vocal, and paralinguistic features from video and audio. These measures support the lab’s research on political ideology, race, and socioeconomic status.

SUMMER 2023 / BERKELEY AI RESEARCH

### Evaluating bias in LLM decisions

UC Berkeley AI Research · Student researcher

I built a 1,020-prompt benchmark to study bias in model decisions across healthcare, criminal justice, and business scenarios. I collected model choices and logits from FLAN, Vicuna, LLaMA, and LLaMA 2.

[Read the resulting paper ↗](https://pranaydogra.com/#publications)

### Research interests

My current interests are mechanistic interpretability and tokenomics. I’m also interested in AI safety evaluations, token-efficient AI systems, and prediction markets.

### Publications

IEEE ICTC 2024

### Quantifying Bias in Agentic Large Language Models: A Benchmarking Approach

A benchmark examining model decisions across race, gender, age, socioeconomic status, and political bias.

[Read on IEEE Xplore ↗](https://ieeexplore.ieee.org/document/10601938)

## Projects

NOV 2026 / HACKATHON

### Assurance

An agent-run patient advocacy firm that files medical and workplace-injury insurance claims and disputes denials with the insurer. Each case gets its own persistent advocate, and a team of company agents handles intake, review, and growth.

[View on GitHub ↗](https://github.com/pranayD21/autonomouscompany)

OCT 2026 / YC HACKATHON

### Agent Task Marketplace

HANDOFF lets agents delegate tasks to peer machines running local models through MCP. I built encrypted task delivery, independent result review, durable task recovery, and test-mode Stripe payments.

[View on GitHub ↗](https://github.com/pranayD21/AgentTaskMarketplace)

OCT–NOV 2026 / BERKELEY STAR

### Flight-computer firmware

Portable C self-tests for five SPI devices with a bounded 29-second scan, plus a health task and watchdog that survive Idle sleep, a start-up self-test radio frame, and a W5500 Ethernet path for DAQ telemetry. Host-tested; hardware validation is pending.

[Read more on the STAR page ↗](https://pranaydogra.com/#star)

SEP 2026 / IN PROGRESS

### LLM Token Efficiency

Exploring how model routing, caching, and context management affect cost and answer quality. Includes a literature review and two local prototypes; live-model evaluation is next.

[View on GitHub ↗](https://github.com/pranayD21/llm-token-efficiency)

MAY 2026 / TEAM PROJECT

### Babel

I built a system that turns legal agreements into executable state machines for validation and scenario testing. Multiple agents share context and use validation feedback to refine the output.

[View on GitHub ↗](https://github.com/neelsck/DDKT)

JUL 2026 / PERSONAL PROJECT

### SLM Cascade

An inbox agent router that starts with small local models and escalates when needed. I benchmarked latency and token usage across Ollama, OpenAI, and Claude.

[View on GitHub ↗](https://github.com/pranayD21/slm-agent-router)

## STAR

[calstar/STAR ↗](https://github.com/calstar/STAR)

### Space Technologies and Rocketry

UC Berkeley’s student-run rocketry team. Students design, build, and test rockets, including liquid-propellant vehicles.

- 27,326 ft · Caldera flight altitude, 2024
- 6th place · IREC 2024, 30,000-foot category[Team results ↗](https://crowdfund.berkeley.edu/project/43553)

NOV 2026 / IN REVIEW

### Health monitoring and watchdog

A health task samples all seven ADC1 inputs (battery, main current, continuity, and altimeter current) into a fixed 25-byte log record at 10 Hz once armed. Sensor, GNSS, and storage workers check in, and the independent watchdog is refreshed only when every running worker has, including through 10-second Stop-mode sleeps. The board reports its reset cause and sends a self-test frame over the radio before its first heartbeat, with three bounded attempts. All 26 flight test stages pass; I broke 13 guarded behaviors one at a time to confirm each turns a test red.

[View PR #179 ↗](https://github.com/calstar/STAR/pull/179)

NOV 2026 / IN REVIEW

### Ethernet telemetry transport

The flight computer could identify its W5500 Ethernet chip but had no data path. I added a bounded UDP driver and a separate network task that sends the DAQ’s existing heartbeat and sensor packets. It discovers the ground server, ignores invalid and actuator packets, drops stale samples, and recovers from link, SPI, and cable failures. Six suites pass under ASan and UBSan, and the STM32H723 build fits in 73 KB of flash. Networking stays disabled until addressing is signed off.

[View PR #177 ↗](https://github.com/calstar/STAR/pull/177)

OCT–NOV 2026 / MERGED

### Flight-computer self-tests

I built a portable C self-test coordinator and datasheet-backed SPI checks for the ISM330DHCX, H3LIS100DL, MS5611, W5500, and SX1262. It schedules probes, limits retries, and reports required and optional device results. A follow-up bounds the whole scan to 29 seconds, marks stalled devices as timed out so the board can still reach Idle, and applies the board requirements the hardware lead confirmed. I also documented how the checks fit the new radio and IMU drivers, including a reproduced IMU reset-timeout bug.

[View PR #138 ↗](https://github.com/calstar/STAR/pull/138) · [View PR #147 ↗](https://github.com/calstar/STAR/pull/147)

SEP–OCT 2026 / MERGED

### Data acquisition software

I built C++ support for an environmental sensor board, parsing UDP packets for temperature, humidity, and pressure telemetry. I integrated the board into STAR’s configuration, data streams, and monitoring interface. Tested in simulation; physical-board validation is pending.

[View PR #76 ↗](https://github.com/calstar/STAR/pull/76)

## Resume

[Open resume ↗](https://pranaydogra.com/Pranay_Dogra_Resume.pdf)[Download PDF ↓](https://pranaydogra.com/Pranay_Dogra_Resume.pdf)

EDUCATION

### University of California, Berkeley

B.S. in Electrical Engineering & Computer Science and Industrial Engineering & Operations Research

AUG 2026–PRESENT

### Software Engineer · Berkeley STAR

Built C++ environmental sensor telemetry and flight-computer firmware: a portable C self-test coordinator with five SPI device checks, a health task and watchdog that survive sleep, and a W5500 UDP telemetry transport. Host-tested; hardware validation is pending.

NOV 2024–AUG 2026

### Founder · CueLens

Built assistive AI for facial emotion recognition. Interviewed 50+ clinicians and users and secured partnerships with three autism clinics.

SUMMERS 2024 & 2025

### Software Engineering Intern · Mirro.ai

Created a balanced dataset of 40,000+ videos and images to reduce bias in an emotion-recognition model. Integrated the model into robotics applications.

NOV 2026 / SELECTED PROJECT

### Assurance

Co-built an agent-run insurance claims advocacy firm at a hackathon, with a persistent advocate per case and company agents for intake, review, and growth.

[View on GitHub ↗](https://github.com/pranayD21/autonomouscompany)

OCT 2026 / SELECTED PROJECT

### Agent Task Marketplace

Built HANDOFF at Y Combinator’s Make Something Agents Want hackathon: an MCP marketplace for tasks executed by local models, with encrypted results, independent review, and test-mode payments.

[View on GitHub ↗](https://github.com/pranayD21/AgentTaskMarketplace)

SKILLS

Python · C++ · C · Java · PyTorch · Git · Ollama · Kubernetes

Research roles are listed in [Research](https://pranaydogra.com/#research).

## Links

[AssuranceAgent-run insurance claims advocacy↗](https://github.com/pranayD21/autonomouscompany)[Agent Task MarketplaceAgent-to-agent tasks on local models↗](https://github.com/pranayD21/AgentTaskMarketplace)[STAR flight-computer firmwareSelf-tests, health monitoring, and Ethernet↗](https://github.com/calstar/STAR/pulls?q=is%3Apr+author%3ApranayD21)[GitHubCode and experiments↗](https://github.com/pranayD21)[LinkedInExperience and connections↗](https://www.linkedin.com/in/pranay-dogra-896b35214/)[BabelContracts as executable state machines↗](https://github.com/neelsck/DDKT)[SLM CascadeSmall-model-first inbox agent router↗](https://github.com/pranayD21/slm-agent-router)[IEEE publicationQuantifying bias in agentic LLMs↗](https://ieeexplore.ieee.org/document/10601938)[CueLens in the Midpeninsula PostProfile of CueLens and how it started↗](https://midpenpost.org/2025/11/18/subtitles-but-for-facial-expressions-a-bellarmine-high-seniors-journey-innovating-to-empower-individuals-on-the-autism-spectrum/)

## Contact

[pranay.dogra@berkeley.edu ↗](mailto:pranay.dogra@berkeley.edu)

[LinkedIn ↗](https://www.linkedin.com/in/pranay-dogra-896b35214/)

## Privacy

Updated September 28, 2026

### Site data

This portfolio’s code does not include advertising, analytics, tracking cookies, or a contact form. It saves your light or dark theme choice in your browser’s local storage. You can remove that preference by clearing this site’s browser data.

### Hosting

The public website is hosted on GitHub Pages. GitHub logs visitor IP addresses for security purposes. See [GitHub’s privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

A separate preview is hosted through OpenAI Sites on Cloudflare. Its hosting and sign-in services may process technical information, such as IP addresses, browser details, and access logs.

### External links and email

Spotify and other external links open separate websites with their own privacy policies. No Spotify player is embedded here. If you email me, I receive your address and the information you choose to send through my email provider.

### Contact

For privacy questions, email [pranay.dogra@berkeley.edu](mailto:pranay.dogra@berkeley.edu).

## Accessibility

The site supports keyboard navigation, light and dark themes, and your device’s reduced-motion setting. ASCII animations play briefly, then stop. The resume summary is available as text alongside the PDF.

If something is difficult to use, email [pranay.dogra@berkeley.edu](mailto:pranay.dogra@berkeley.edu).
