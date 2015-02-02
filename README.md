# FitNote

## Minimum Viable Product
FitNote is a clone of Evernote build on Rails on back-end and with Backbone on the front-end.

- [x] Create accounts (register)
- [x] Create sessions (log in)
- [x] Create notebooks
- [x] Create notes
- [x] Tag notes
- [x] View notebooks and notes
- [x] Search for notebooks and notes

## Design Docs
* [View Wireframes][views]:
* [DB schema][schema]

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
In Phase 1, I'm planning on setting up authentication for the User to create an account and sign in. In addition, I'm going to create Schema, Models and Controllers to create notebooks and notes in RAILS. Before starting Phase 2, I will also push the app to Heroku.
* [Phase1][phase-one]

### Phase 2: JSON API and Backbone Views (~2 days)
In this Phase, I will add api routes to serve notebooks and notes as JSON and then add Backbone Models and Collections to fetch data from my routes. I will also create existing Rails Views in Backbone.
* [Phase2][phase-two]

### Phase 3: Editing and Displaying Notebooks (~1 days )
In this Phase, I will set up a Notebooks CompositeView in Backbone and style the page with HTML & CSS. In addition, I will add a nav bar & set up divs on the Index Page.
* [Phase3][phase-three]

### Phase 4: Editing and Displaying Notes (~2 days)
In this Phase, I will add the ability to enter content for a note in the Notes Form & save the note when the user clicks outside the form. I will work on organizing HTML & CSS for this form.
* [Phase4][phase-four]

### Phase 5: Tagging Notes (~1 day)
In this Phase, I will add the ability to add tags and select tags so they filter notes that are displayed.
* [Phase5][phase-five]

### Phase 6: Styling with HTML & CSS (~2 days)
The final phase will be polishing CSS and HTML to make my UI look amazing.

### Bonus Features (TBD)
- [ ] Uploading images to notes
- [ ] Markdown & styling text (bold/italics/etc.)
- [ ] Searching for Posts
- [ ] Sorting Notes by Date/Title/Updated


[views]: ./docs/views.md
[schema]: ./docs/schema.md


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
