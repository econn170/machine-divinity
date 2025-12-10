# Machine Divinity
Eschatology, Digital Mysticism & Generative Prophecy on 4chan


## Project Description
Machine Divinity is a computational and conceptual/creative project that examines how anonymous users across four 4chan boards (/pol/, /x/, /lit/, and /g/) use spiritual, mystical, esoteric, psychosis-coded, and apocalyptic language to make meaning in digital space. The project began by scraping full JSON thread data using the 4chan API, cleaning and filtering millions of lines of text using a custom lexicon of religious, occult, metaphysical, and unreality-related terminology.

Building on scholarship that identifies the emergence of digital esotericism and online mysticism, such as Asprem’s work on meme magic and egregores, and Magliocco’s on magical politics, the project adapts Petersen & Baun’s recent typology of conflictual, revelatory, and resignationist eschatologies to a broader, multi-board corpus. Petersen & Baun identify three eschatological formations on /pol/: conflictual, revelatory, and resignationist, each one being tied to different conceptions of agency and crisis: I sorted my data into these three categories and created three speculative language models based on them. I incorporated the models into a user centered site, where users can interface with a “digital prophet” with one of three distinct perspectives. I wanted to somehow illustrate the “collective consciousness” or “singularity” that many users feel when engaging in these boards through entities built on their data.

## Rationale Statement
I was motivated by a desire to understand how spiritual language, digital mysticism, and psychosis-coded aesthetics appear in contemporary online spaces, especially more niche ones like 4chan. Reading Peterson & Baun’s work inspired me to explore eschatology more, or “the part of theology concerned with death, judgment, and the final destiny of the soul and of humankind”. Subcultures on platforms like 4chan often blend irony, extremity, humor, and sincerity, creating a distinctive form of discourse to cope with the near-apocalyptic vibe of the world. Scholars have described this discourse as “post ironic religion” (Peterson & Baun, 2025) or “meme magic” (Asprem 2020). 

This project extends Peterson & Baun’s framework beyond political extremism into the broader terrain of digital mysticism. By applying these eschatology categories to a broad dataset across 4chan, the project reveals how spiritual and metaphysical meaning-making occurs across multiple boards, not just /pol/. This approach also aligns with Asprem’s arguments that digital subcultures generate quasi-occult “egregores” through shared symbolic networks. My goal is to map these linguistic structures and illuminate how anonymous communities collectively understand crisis, revelation, and transcendence.

This project is not intended to amplify harmful content or endorse extremist worldviews. Instead, it is a critical, artistic, and research-driven investigation of how anonymous communities craft meaning under conditions of crisis. By transforming these linguistic structures into oracular models, the project illustrates how collective symbolic systems behave like “egregores”, or self-reinforcing, emergent entities formed from shared language.

## Workflow
I collected thread data from four 4chan boards using the platform’s public API, extracted post text and metadata, and filtered the corpus using a lexicon of spiritually charged, mystical, and psychosis-coded terms. After cleaning HTML, URLs, and formatting noise, I categorized posts into conflictual, revelatory, and resignationist eschatologies using a keyword-driven adaptation of Petersen & Baun’s typology. I generated sentence embeddings and UMAP visualizations to explore how these linguistic worldviews clustered across the dataset. Each eschatological subset was then uploaded to HuggingFace and used to fine-tune a separate GPT-Neo 125M model via TRL’s SFTTrainer. Finally, I deployed the models through a FastAPI backend on HuggingFace Spaces and built a GitHub Pages interface where users can choose an oracle and generate text, enabling a direct encounter with these three distinct eschatological “voices.”


## Further Uses
This dataset can support future work in linguistic analysis, digital ethnography, media theory, or creative projects. Someone could build sentiment analysis tools to deepen the examination of online spiritual language, compare linguistic patterns across boards or time periods, or analyze how certain terms cluster together in these contexts. There could also be more time-based analysis, like comparing eschatological language before/after major events. I would be interested in creating visualizations to represent clusters of mystical or psychosis-coded concepts, functioning as a visualization of a digital “egregore” or collective symbolic mind. I also want to explore more how small models trained on fringe speech behave: my model is definitely not the most advanced, which I think works for the scope and context of the project, but I would love someone to fine tune this even further. 

## Files List
1. [final_project.ipynb](final_project.ipynb):  4chan API scraping, filtering, cleaning, exploration
2. [religious_threads_expanded_cleaned (1).csv](religious_threads_expanded_cleaned (1).csv):  processed full dataset
3. [resignationist_threads.csv](resignationist_threads.csv): filtered resignationist dataset
4. [revelatory_threads.csv](revalatory_threads.csv): filtered revelatory dataset
5. [conflictual_threads.csv](conflictual_threads.csv): filtered conflictual dataset
6. [revelatory_threads.ipynb](revelatory_threads.ipynb), [conflictual_threads.ipynb](conflictual_threads.ipynb), and [resignationist_threads.ipynb](resignationist_threads.ipynb): the notebooks used to train the three language models
7. [econnors/resignationlist-oracle](https://huggingface.co/econnors/resignationist-oracle), [econnors/conflictual-oracle](https://huggingface.co/econnors/conflictual-oracle/tree/main), and [econnors/resignationist-oracle](https://huggingface.co/econnors/resignationist-oracle): the huggyface links for the three final models
8. [machine-divinity-proxy (HF Space)](https://huggingface.co/spaces/econnors/machine-divinity-proxy): API  backend
9. [index.html](index.html): homepage
10. [about.html](about.html): about page
11. [eschatology.html](eschatology.html): explains eschatology
12. [process.html](process.html): explains process
13. [ethics.html](ethics.html): gives ethics and content statement
14. [style.css](style.css): styles
15. [script.js](script.js): javascript
16. [README.md](README.md): this document

