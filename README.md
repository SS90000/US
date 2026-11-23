# Find My Trial · United States (pilot)

Find My Trial™: patient-facing search for open clinical trials with sites in the United States, by Salish Seven.

- Landing page: https://ss90000.github.io/US/
- Cancer: https://ss90000.github.io/US/oncology/
- Neurological conditions: https://ss90000.github.io/US/neurology/
- Other conditions: https://ss90000.github.io/US/other/
- Rare diseases: https://ss90000.github.io/US/rare/

Data comes from ClinicalTrials.gov and is rebuilt daily by `.github/workflows/update-trials.yml`.
Not medical advice.
## Sections

Cancer (`oncology/`), neurological conditions (`neurology/`), other conditions (`other/`) and rare diseases (`rare/`).
Rare-disease studies are found by matching each study's conditions to Orphanet's list of rare diseases, so they also appear in the other three sections.

## What is included

- Every study on ClinicalTrials.gov that is **recruiting** or **not yet recruiting** and lists at least one site in the country.
- Canada only: open trials that Health Canada's [clinical trial search portal](https://clinical-trials-search.canada.ca/) lists as authorized, whose ClinicalTrials.gov record does not list a Canadian site yet. They are labelled "Authorized by Health Canada".

## What is not included

- Studies not open to new participants: active but not recruiting, enrolling by invitation, suspended, completed, terminated or withdrawn. Today's counts are in `data/meta.json` under `notIncluded`.
- Trials registered only outside ClinicalTrials.gov (for example ISRCTN or the EU Clinical Trials Register).
- Canada only: Health Canada-authorized trials with no public registry record. They have no sites, contacts or eligibility details. The count is in `data/meta.json` under `hcNoRegistry`.
- Changes a sponsor has not yet made in the registry.

The landing page shows the same list under "What Find My Trial does not include".

## Quality checks

- **Coverage (November 2026).** The list was compared with ClinicalTrials.gov in both directions: all 25,262 open studies with a US site were present and nothing extra was listed. Field checks (status, sites, ages, contacts) against the registry records all matched.
- **Human review (November 2026).** A person checked a random sample from each section against the registry record. US: 21 studies, 2 in the wrong section (both other conditions). Canada: 24 studies, 2 in the wrong section. No intervention type was wrong. All four errors were fixed. A later review of 30 European trials found 4 more patterns (stop-smoking studies at cancer screening, autoimmune muscle inflammation filed under neurology, spinal muscular atrophy not marked rare, small cell lung and liver cancer marked rare); these were fixed here too.

The sorting into sections and categories is automatic (text matching), so some studies will still be in the wrong place. Each pattern found in a review is fixed in `.github/build_trials.py` so that every similar study moves too, not just the one reviewed.
