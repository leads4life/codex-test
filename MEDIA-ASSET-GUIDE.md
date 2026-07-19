# Media Asset Guide — The Locked Study

Replace assets in `/public` without changing gameplay logic, or edit the data files if filenames change. Maintain identical camera framing for before/after state pairs so percentage hotspots remain aligned.

| Path | Purpose | Dimensions / duration | Prompt guidance | Text required | Transparent | Pair |
|---|---|---:|---|---|---|---|
| `/images/rooms/study-default.svg` | Main study | 16:9 1600×900+ | Victorian inventor study, walnut desk lower center, bookshelf left, fireplace center, cabinet right, locked door far right, amber lamps and blue moonlight. | visible clue motifs okay | no | lights-on |
| `/images/rooms/study-lights-on.svg` | Powered study | 16:9 | Same camera; machine glowing, flickering lights. | machine digits may appear | no | default |
| `/images/rooms/desk-closed.svg` | Desk before drawer | 16:9 | Large wooden desk, calendar, clock plaque, locked drawer keypad. | 1847 clue readable in close-up | no | desk-open |
| `/images/states/desk-open.svg` | Desk after drawer | 16:9 | Same desk, drawer mechanically open, red lens, torn note visible. | no | no | closed |
| `/images/rooms/bookshelf-normal.svg` | Bookshelf | 16:9 | Tall book wall with four marked spines △ ○ ✦ ♜. | symbols readable | no | bookshelf-open |
| `/images/states/bookshelf-open.svg` | Projector revealed | 16:9 | Same shelf shifted aside, projector compartment exposed. | no | no | normal |
| `/images/rooms/fireplace-portrait.svg` | Fireplace/portrait | 16:9 | Mantel, portrait, clock, framed star chart. | star labels in close-up | no | portrait-moved |
| `/images/states/portrait-moved.svg` | Hidden clock back | 16:9 | Portrait moved, reversed marks behind clock. | reversed 10:35 | no | normal |
| `/images/rooms/cabinet-off.svg` | Cabinet locked | 16:9 | Brass mechanical cabinet with celestial symbol lock. | symbols readable | no | cabinet-powered |
| `/images/states/cabinet-powered.svg` | Cabinet open | 16:9 | Cabinet open with cipher disk and pocket watch. | offset 7 in close-up | no | off |
| `/images/rooms/door-locked.svg` | Exit locked | 16:9 | Heavy study door with final keypad. | no | no | unlocked |
| `/images/states/door-unlocked.svg` | Exit unlocked | 16:9 | Same door ajar, light beyond. | no | no | locked |
| `/images/closeups/calendar-clock.svg` | Calendar clue | 4:3 | Desk calendar Oct 18, stopped clock/year plaque 47. | yes | no | none |
| `/images/closeups/photograph.svg` | Normal photo | 4:3 | Sepia photograph with hidden red ink invisible normally. | no obvious answer | no | hidden |
| `/images/closeups/photograph-hidden.svg` | Lens reveal | 4:3 | Same photo with red-lens symbols △ ○ ✦ ♜. | yes | no | normal |
| `/images/closeups/star-chart.svg` | Star chart | 4:3 | Framed chart labeling route ☉ ☽ ♃ ♄ ✦. | yes | no | none |
| `/images/closeups/clock-back.svg` | Mirror clue | 4:3 | Reversed markings that read 10:35 in mirror. | reversed yes | no | none |
| `/images/items/*.svg` | Inventory | square 512+ | Isolated antique item on transparent background: brass key, red lens, torn note, photo, gear, watch, cipher disk, slide, mirror, handle. | optional | yes | none |
| `/images/posters/*.svg` | Video posters | 16:9 | Still frame matching each cinematic. | captions external | no | video |
| `/videos/intro-placeholder.mp4` | Opening story | 15–45s | Missing inventor message, estate approach, entering study, door locks, machine countdown starts. | captions provided | no | poster intro |
| `/videos/desk-unlock-placeholder.mp4` | Drawer reward | 3–10s | Close brass drawer unlocks and opens. | no | no | desk states |
| `/videos/bookshelf-open-placeholder.mp4` | Shelf reward | 3–10s | Books slide, hidden projector panel opens. | no | no | shelf states |
| `/videos/projector-activation-placeholder.mp4` | Projector reward | 3–10s | Gear spins, projector beam paints stars. | no | no | star clue |
| `/videos/machine-start-placeholder.mp4` | Machine reward | 3–10s | Clock runs backward, machine hums, lamps flash. | no | no | powered study |
| `/videos/final-door-placeholder.mp4` | Door reward | 3–10s | Door bolts retract and opens. | no | no | door states |
| `/videos/ending-placeholder.mp4` | Ending | 10–30s | Escape, inventor recording reveals final story. | captions | no | ending poster |
| `/audio/*.mp3` | Ambience/SFX | loop or 0.5–8s | Low room tone, ticking, clicks, moving shelf, projector, hum, success/failure, door unlock. | transcripts for speech | no | none |

## Sample AI image prompts

**Main study:** Cinematic Victorian mechanical inventor study, fixed wide 16:9 camera, walnut desk lower center, book wall left, fireplace and portrait center, brass cabinet right, locked exit door far right, warm amber lamps, blue moonlight, dust, readable but not tiny clue areas.

**Desk close-up:** Antique desk close-up, calendar page marked October 18, stopped clock with small brass year plaque 47, drawer keypad, consistent amber light, sharp readable text.

**Bookshelf wall:** Tall walnut shelves with four prominent book spines marked triangle, circle, star, rook, same camera before and after hidden panel.

**Mechanical cabinet:** Aged brass cabinet with five celestial buttons sun moon Jupiter Saturn star, open state reveals cipher disk and pocket watch engraved 7.

**Fireplace and portrait:** Stone fireplace, stern inventor portrait, antique clock, framed star chart, moonlit shadows, hidden reversed marks behind clock.

**Locked door:** Heavy carved wooden door with brass keypad, final unlocked version ajar with bright hall light.

**Inventory objects:** Isolated transparent-background antique object, soft shadow, centered, high detail, no background.

**Clue photographs/documents:** Sepia paper, legible handwritten marks, high resolution, avoid random unreadable text except intended clue.

## Sample AI video prompts

Use the exact same set dressing and camera as corresponding stills. Generate short locked-off shots: drawer unlock, bookshelf sliding open, projector activating, machine powering up with clock reversing, exit door unlocking, and ending escape. Avoid changing hotspot-critical object positions between before and after stills.
