# Commit convention

## How to create commits

In our project, we create commits in an orderly way, using emoji for this and start the commit content with a capital letter.
The commit body complements „this commit will...". For example: ":lipstick: Fix main container height"

## List of emojis that we use

| Emoji | Code                          | Description                                                   | Name                      | Version |
| ----- | ----------------------------- | ------------------------------------------------------------- | ------------------------- | ------- |
| 🎨    | `:art:`                       | Improve structure / format of the code.                       | art                       | null    |
| ⚡️   | `:zap:`                       | Improve performance.                                          | zap                       | patch   |
| 🔥    | `:fire:`                      | Remove code or files.                                         | fire                      | null    |
| 🐛    | `:bug:`                       | Fix a bug.                                                    | bug                       | patch   |
| 🚑️   | `:ambulance:`                 | Critical hotfix.                                              | ambulance                 | patch   |
| ✨    | `:sparkles:`                  | Introduce new features.                                       | sparkles                  | minor   |
| 📝    | `:memo:`                      | Add or update documentation.                                  | memo                      | null    |
| 🚀    | `:rocket:`                    | Deploy stuff.                                                 | rocket                    | null    |
| 💄    | `:lipstick:`                  | Add or update the UI and style files.                         | lipstick                  | patch   |
| 🎉    | `:tada:`                      | Begin a project.                                              | tada                      | null    |
| ✅    | `:white_check_mark:`          | Add or update tests.                                          | white-check-mark          | null    |
| 🔒️   | `:lock:`                      | Fix security issues.                                          | lock                      | patch   |
| 🔖    | `:bookmark:`                  | Release / Version tags.                                       | bookmark                  | null    |
| 🚨    | `:rotating_light:`            | Fix compiler / linter warnings.                               | rotating-light            | null    |
| 🚧    | `:construction:`              | Work in progress.                                             | construction              | null    |
| 💚    | `:green_heart:`               | Fix CI Build.                                                 | green-heart               | null    |
| ⬇️    | `:arrow_down:`                | Downgrade dependencies.                                       | arrow-down                | patch   |
| ⬆️    | `:arrow_up:`                  | Upgrade dependencies.                                         | arrow-up                  | patch   |
| 📌    | `:pushpin:`                   | Pin dependencies to specific versions.                        | pushpin                   | patch   |
| 👷    | `:construction_worker:`       | Add or update CI build system.                                | construction-worker       | null    |
| 📈    | `:chart_with_upwards_trend:`  | Add or update analytics or track code.                        | chart-with-upwards-trend  | patch   |
| ♻️    | `:recycle:`                   | Refactor code.                                                | recycle                   | null    |
| ➕    | `:heavy_plus_sign:`           | Add a dependency.                                             | heavy-plus-sign           | patch   |
| ➖    | `:heavy_minus_sign:`          | Remove a dependency.                                          | heavy-minus-sign          | patch   |
| 🔧    | `:wrench:`                    | Add or update configuration files.                            | wrench                    | patch   |
| 🔨    | `:hammer:`                    | Add or update development scripts.                            | hammer                    | null    |
| 🌐    | `:globe_with_meridians:`      | Internationalization and localization.                        | globe-with-meridians      | patch   |
| ✏️    | `:pencil2:`                   | Fix typos.                                                    | pencil2                   | patch   |
| 💩    | `:poop:`                      | Write bad code that needs to be improved.                     | poop                      | null    |
| ⏪️   | `:rewind:`                    | Revert changes.                                               | rewind                    | patch   |
| 🔀    | `:twisted_rightwards_arrows:` | Merge branches.                                               | twisted-rightwards-arrows | null    |
| 📦️   | `:package:`                   | Add or update compiled files or packages.                     | package                   | patch   |
| 👽️   | `:alien:`                     | Update code due to external API changes.                      | alien                     | patch   |
| 🚚    | `:truck:`                     | Move or rename resources (e.g.: files, paths, routes).        | truck                     | null    |
| 📄    | `:page_facing_up:`            | Add or update license.                                        | page-facing-up            | null    |
| 💥    | `:boom:`                      | Introduce breaking changes.                                   | boom                      | major   |
| 🍱    | `:bento:`                     | Add or update assets.                                         | bento                     | patch   |
| ♿️   | `:wheelchair:`                | Improve accessibility.                                        | wheelchair                | patch   |
| 💡    | `:bulb:`                      | Add or update comments in source code.                        | bulb                      | null    |
| 🍻    | `:beers:`                     | Write code drunkenly.                                         | beers                     | null    |
| 💬    | `:speech_balloon:`            | Add or update text and literals.                              | speech-balloon            | patch   |
| 🗃️    | `:card_file_box:`             | Perform database related changes.                             | card-file-box             | patch   |
| 🔊    | `:loud_sound:`                | Add or update logs.                                           | loud-sound                | null    |
| 🔇    | `:mute:`                      | Remove logs.                                                  | mute                      | null    |
| 👥    | `:busts_in_silhouette:`       | Add or update contributor(s).                                 | busts-in-silhouette       | null    |
| 🚸    | `:children_crossing:`         | Improve user experience / usability.                          | children-crossing         | patch   |
| 🏗️    | `:building_construction:`     | Make architectural changes.                                   | building-construction     | null    |
| 📱    | `:iphone:`                    | Work on responsive design.                                    | iphone                    | patch   |
| 🤡    | `:clown_face:`                | Mock things.                                                  | clown-face                | null    |
| 🥚    | `:egg:`                       | Add or update an easter egg.                                  | egg                       | patch   |
| 🙈    | `:see_no_evil:`               | Add or update a .gitignore file.                              | see-no-evil               | null    |
| 📸    | `:camera_flash:`              | Add or update snapshots.                                      | camera-flash              | null    |
| ⚗️    | `:alembic:`                   | Perform experiments.                                          | alembic                   | patch   |
| 🔍️   | `:mag:`                       | Improve SEO.                                                  | mag                       | patch   |
| 🏷️    | `:label:`                     | Add or update types.                                          | label                     | patch   |
| 🌱    | `:seedling:`                  | Add or update seed files.                                     | seedling                  | null    |
| 🚩    | `:triangular_flag_on_post:`   | Add, update, or remove feature flags.                         | triangular-flag-on-post   | patch   |
| 🥅    | `:goal_net:`                  | Catch errors.                                                 | goal-net                  | patch   |
| 💫    | `:dizzy:`                     | Add or update animations and transitions.                     | animation                 | patch   |
| 🗑️    | `:wastebasket:`               | Deprecate code that needs to be cleaned up.                   | wastebasket               | patch   |
| 🛂    | `:passport_control:`          | Work on code related to authorization, roles and permissions. | passport-control          | patch   |
| 🩹    | `:adhesive_bandage:`          | Simple fix for a non-critical issue.                          | adhesive-bandage          | patch   |
| 🧐    | `:monocle_face:`              | Data exploration/inspection.                                  | monocle-face              | null    |
| ⚰️    | `:coffin:`                    | Remove dead code.                                             | coffin                    | null    |

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
