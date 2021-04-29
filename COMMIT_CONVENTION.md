# Commit convention

## How to create commits

In our project, we create commits in an orderly way, using emoji for this and start the commit content with a capital letter.
The commit body complements „this commit will...". For example: ":lipstick: Fix main container height"

## List of emojis that we use

| Emoji | Entity    | Code                        | Description                                                   | Name                      | Version |
| ----- | --------- | --------------------------- | ------------------------------------------------------------- | ------------------------- | ------- |
| 🎨    | &#x1f3a8; | :art:                       | Improve structure / format of the code.                       | art                       | null    |
| ⚡️   | &#x26a1;  | :zap:                       | Improve performance.                                          | zap                       | patch   |
| 🔥    | &#x1f525; | :fire:                      | Remove code or files.                                         | fire                      | null    |
| 🐛    | &#x1f41b; | :bug:                       | Fix a bug.                                                    | bug                       | patch   |
| 🚑️   | &#128657; | :ambulance:                 | Critical hotfix.                                              | ambulance                 | patch   |
| ✨    | &#x2728;  | :sparkles:                  | Introduce new features.                                       | sparkles                  | minor   |
| 📝    | &#x1f4dd; | :memo:                      | Add or update documentation.                                  | memo                      | null    |
| 🚀    | &#x1f680; | :rocket:                    | Deploy stuff.                                                 | rocket                    | null    |
| 💄    | &#ff99cc; | :lipstick:                  | Add or update the UI and style files.                         | lipstick                  | patch   |
| 🎉    | &#127881; | :tada:                      | Begin a project.                                              | tada                      | null    |
| ✅    | &#x2705;  | :white_check_mark:          | Add or update tests.                                          | white-check-mark          | null    |
| 🔒️   | &#x1f512; | :lock:                      | Fix security issues.                                          | lock                      | patch   |
| 🔖    | &#x1f516; | :bookmark:                  | Release / Version tags.                                       | bookmark                  | null    |
| 🚨    | &#x1f6a8; | :rotating_light:            | Fix compiler / linter warnings.                               | rotating-light            | null    |
| 🚧    | &#x1f6a7; | :construction:              | Work in progress.                                             | construction              | null    |
| 💚    | &#x1f49a; | :green_heart:               | Fix CI Build.                                                 | green-heart               | null    |
| ⬇️    | ⬇️        | :arrow_down:                | Downgrade dependencies.                                       | arrow-down                | patch   |
| ⬆️    | ⬆️        | :arrow_up:                  | Upgrade dependencies.                                         | arrow-up                  | patch   |
| 📌    | &#x1F4CC; | :pushpin:                   | Pin dependencies to specific versions.                        | pushpin                   | patch   |
| 👷    | &#x1f477; | :construction_worker:       | Add or update CI build system.                                | construction-worker       | null    |
| 📈    | &#x1F4C8; | :chart_with_upwards_trend:  | Add or update analytics or track code.                        | chart-with-upwards-trend  | patch   |
| ♻️    | &#x2672;  | :recycle:                   | Refactor code.                                                | recycle                   | null    |
| ➕    | &#10133;  | :heavy_plus_sign:           | Add a dependency.                                             | heavy-plus-sign           | patch   |
| ➖    | &#10134;  | :heavy_minus_sign:          | Remove a dependency.                                          | heavy-minus-sign          | patch   |
| 🔧    | &#x1f527; | :wrench:                    | Add or update configuration files.                            | wrench                    | patch   |
| 🔨    | &#128296; | :hammer:                    | Add or update development scripts.                            | hammer                    | null    |
| 🌐    | &#127760; | :globe_with_meridians:      | Internationalization and localization.                        | globe-with-meridians      | patch   |
| ✏️    | &#59161;  | :pencil2:                   | Fix typos.                                                    | pencil2                   | patch   |
| 💩    | &#58613;  | :poop:                      | Write bad code that needs to be improved.                     | poop                      | null    |
| ⏪️   | &#9194;   | :rewind:                    | Revert changes.                                               | rewind                    | patch   |
| 🔀    | &#128256; | :twisted_rightwards_arrows: | Merge branches.                                               | twisted-rightwards-arrows | null    |
| 📦️   | &#1F4E6;  | :package:                   | Add or update compiled files or packages.                     | package                   | patch   |
| 👽️   | &#1F47D;  | :alien:                     | Update code due to external API changes.                      | alien                     | patch   |
| 🚚    | &#1F69A;  | :truck:                     | Move or rename resources (e.g.: files, paths, routes).        | truck                     | null    |
| 📄    | &#1F4C4;  | :page_facing_up:            | Add or update license.                                        | page-facing-up            | null    |
| 💥    | &#x1f4a5; | :boom:                      | Introduce breaking changes.                                   | boom                      | major   |
| 🍱    | &#1F371   | :bento:                     | Add or update assets.                                         | bento                     | patch   |
| ♿️   | &#9855;   | :wheelchair:                | Improve accessibility.                                        | wheelchair                | patch   |
| 💡    | &#128161; | :bulb:                      | Add or update comments in source code.                        | bulb                      | null    |
| 🍻    | &#x1f37b; | :beers:                     | Write code drunkenly.                                         | beers                     | null    |
| 💬    | &#128172; | :speech_balloon:            | Add or update text and literals.                              | speech-balloon            | patch   |
| 🗃️    | &#128451; | :card_file_box:             | Perform database related changes.                             | card-file-box             | patch   |
| 🔊    | &#128266; | :loud_sound:                | Add or update logs.                                           | loud-sound                | null    |
| 🔇    | &#128263; | :mute:                      | Remove logs.                                                  | mute                      | null    |
| 👥    | &#128101; | :busts_in_silhouette:       | Add or update contributor(s).                                 | busts-in-silhouette       | null    |
| 🚸    | &#128696; | :children_crossing:         | Improve user experience / usability.                          | children-crossing         | patch   |
| 🏗️    | &#1f3d7;  | :building_construction:     | Make architectural changes.                                   | building-construction     | null    |
| 📱    | &#128241; | :iphone:                    | Work on responsive design.                                    | iphone                    | patch   |
| 🤡    | &#129313; | :clown_face:                | Mock things.                                                  | clown-face                | null    |
| 🥚    | &#129370; | :egg:                       | Add or update an easter egg.                                  | egg                       | patch   |
| 🙈    | &#8bdfe7; | :see_no_evil:               | Add or update a .gitignore file.                              | see-no-evil               | null    |
| 📸    | &#128248; | :camera_flash:              | Add or update snapshots.                                      | camera-flash              | null    |
| ⚗️    | &#128248; | :alembic:                   | Perform experiments.                                          | alembic                   | patch   |
| 🔍️   | &#128269; | :mag:                       | Improve SEO.                                                  | mag                       | patch   |
| 🏷️    | &#127991; | :label:                     | Add or update types.                                          | label                     | patch   |
| 🌱    | &#127793; | :seedling:                  | Add or update seed files.                                     | seedling                  | null    |
| 🚩    | &#x1F6A9; | :triangular_flag_on_post:   | Add, update, or remove feature flags.                         | triangular-flag-on-post   | patch   |
| 🥅    | &#x1F945; | :goal_net:                  | Catch errors.                                                 | goal-net                  | patch   |
| 💫    | &#x1f4ab; | :dizzy:                     | Add or update animations and transitions.                     | animation                 | patch   |
| 🗑️    | &#x1F5D1; | :wastebasket:               | Deprecate code that needs to be cleaned up.                   | wastebasket               | patch   |
| 🛂    | &#x1F6C2; | :passport_control:          | Work on code related to authorization, roles and permissions. | passport-control          | patch   |
| 🩹    | &#x1FA79; | :adhesive_bandage:          | Simple fix for a non-critical issue.                          | adhesive-bandage          | patch   |
| 🧐    | &#x1F9D0; | :monocle_face:              | Data exploration/inspection.                                  | monocle-face              | null    |
| ⚰️    | &#x26B0;  | :coffin:                    | Remove dead code.                                             | coffin                    | null    |

## How to decide which emoji to use

In most cases, your change will fit into a pretty obvious emoji category. If it doesn't, you should think hard about whether or not you're making a clean change.

Often you can break up changes into two or more commits that each accomplish their own specific type of action. If that means you only change one tiny line or fix a simple typo in a commit, so be it! It should be a no-brainer that any given commit does exactly what it says it does — and only what is says it does. No side-effects.

In general, you should use exactly one emoji per commit message. In rare cases, you should use a second emoji (e.g. when using something like ⚡ to signify that whatever you just did — 🐛, 🔥, etc. — was a breaking change).

Emoji will also depend on your client/user. A back-end API might use ✨ when adding new API endpoints, and the front-end app might use ✨ when using those endpoints to display new content.

## The formula

### Human _WIP_

`:[EMOJI_NAME]: [THE COMMIT WILL...]`

- `:sparkles: Add cool animations`
- `:bug: Fix the flicker`

### RegEx

`[:]([A-Z a-z])\w+[:] [A-Z]\w.*$`
[RegEx example](regexr.com/5hrd4)

## Examples

- `🐛 Fix the flicker caused by the drawer`
- `✨ Add a super cool animation for the drawer`
- `♻️ Refactor drawer code`
- `🔥 Remove deprecated drawer code`
- `📦 Install react-littera@2.1.4`
