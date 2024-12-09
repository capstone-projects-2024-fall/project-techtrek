"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2994],{95156:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(74848),s=t(28453);const i={sidebar_position:3},r="Sequence Diagrams",c={id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use Case 1 - Account Creation",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-techtrek/docs/system-architecture/sequence-diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-techtrek/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Prince Nahar",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-techtrek/docs/system-architecture/class-diagrams"},next:{title:"Database Diagrams",permalink:"/project-techtrek/docs/system-architecture/database-diagrams"}},o={},d=[{value:"Use Case 1 - Account Creation",id:"use-case-1---account-creation",level:2},{value:"Use Case 2 - Logging in",id:"use-case-2---logging-in",level:2},{value:"Use Case 3 - Quest Creation",id:"use-case-3---quest-creation",level:2},{value:"Use Case 4 - Create Avatar",id:"use-case-4---create-avatar",level:2},{value:"Use Case 5 - Starting a Quest",id:"use-case-5---starting-a-quest",level:2},{value:"Use Case 6 - Playing a Quest Solo",id:"use-case-6---playing-a-quest-solo",level:2},{value:"Use Case 7 - Creating a Party to Start a Quest",id:"use-case-7---creating-a-party-to-start-a-quest",level:2},{value:"Use Case 8 - Join a Party",id:"use-case-8---join-a-party",level:2},{value:"Use Case 9 - Playing a Quest with a Party",id:"use-case-9---playing-a-quest-with-a-party",level:2}];function l(e){const a={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"sequence-diagrams",children:"Sequence Diagrams"}),"\n",(0,n.jsx)(a.h2,{id:"use-case-1---account-creation",children:"Use Case 1 - Account Creation"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to create a new account."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant DevsAndDragonsApp as LandingPage\n    participant RegistrationForm\n    participant Backend\n    participant Database\n    \n    User->>DevsAndDragonsApp: Opens application for the first time\n    activate User\n    activate DevsAndDragonsApp\n    DevsAndDragonsApp--\x3e>User: Displays home screen with "Create Account" button\n    DevsAndDragonsApp->>RegistrationForm: Selects "Create Account" button\n    deactivate DevsAndDragonsApp\n    \n    activate RegistrationForm\n    RegistrationForm--\x3e>User: Displays account registration form\n    User->>RegistrationForm: Fills out form (username, password, email)\n    RegistrationForm->>Backend: Sends form data to backend\n    deactivate RegistrationForm\n    activate Backend\n    Backend->>Database: Checks if username or email already exists\n    activate Database\n    Database--\x3e>Backend: Returns validation result\n    deactivate Database\n    Backend--\x3e>RegistrationForm: Returns success or error message\n    deactivate Backend\n    activate RegistrationForm\n    RegistrationForm--\x3e>User: Displays success message or prompts to try again (if fields are incorrect)\n    deactivate RegistrationForm\n    deactivate User'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user opens the Devs & Dragons application for the first time."}),"\n",(0,n.jsx)(a.li,{children:"The user selects the \u2018Create Account\u2019 button to begin the account registration process."}),"\n",(0,n.jsx)(a.li,{children:"The user enters the desired username, password, and email into the form."}),"\n",(0,n.jsx)(a.li,{children:"If any fields are filled out incorrectly, the user is notified and asked to try again."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-2---logging-in",children:"Use Case 2 - Logging in"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to log in to an account they created"})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant HomePage as LandingPage\n    participant LoginForm\n    participant Backend\n    participant EmailService\n    participant Database as MongoDB\n    User->>HomePage: Navigates to landing page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home page\n    HomePage->>LoginForm: Selects "Login" button\n    deactivate HomePage\n    activate LoginForm\n    LoginForm--\x3e>User: Displays login form\n    User->>LoginForm: Enters username and password\n    LoginForm->>Backend: Verifies credentials\n    activate Backend\n    Backend->>Database: Checks credentials\n    activate Database\n    Database--\x3e>Backend: Credentials verified\n    deactivate Database\n    Backend->>EmailService: Request to send 2FA code\n    activate EmailService\n    EmailService--\x3e>User: Sends email with 2FA code\n    deactivate EmailService\n    User->>LoginForm: Enters 2FA code\n    LoginForm->>Backend: Verifies 2FA code\n    Backend->Database: Confirms 2FA\n    activate Database\n    Database--\x3e>Backend: 2FA code is valid\n    deactivate Database\n    Backend--\x3e>LoginForm: 2FA verified\n    deactivate Backend\n    LoginForm--\x3e>User: Redirects to home page\n    deactivate LoginForm\n    LoginForm--\x3e>User: Sends 2FA code to email\n    activate LoginForm\n    LoginForm->>EmailService: Request to send 2FA code\n    activate EmailService\n    EmailService--\x3e>User: Sends email with 2FA code\n    deactivate EmailService\n    deactivate LoginForm\n    User->>LoginForm: Enters 2FA code\n    activate LoginForm\n    LoginForm->>Backend: Verifies 2FA code\n    activate Backend\n    Backend->>Database: Confirms 2FA\n    activate Database\n    Database--\x3e>Backend: 2FA code is valid\n    deactivate Database\n    Backend--\x3e>LoginForm: 2FA verified\n    deactivate Backend\n    LoginForm--\x3e>User: Redirects to home page\n    deactivate LoginForm\n    deactivate User'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user navigates to the site's landing page"}),"\n",(0,n.jsx)(a.li,{children:"The user selects the \u2018login\u2019 button"}),"\n",(0,n.jsx)(a.li,{children:"The user enters their username and password"}),"\n",(0,n.jsx)(a.li,{children:"After providing the correct credentials, the user will receive a 2FA code in their email"}),"\n",(0,n.jsx)(a.li,{children:"The user enters the 2FA code"}),"\n",(0,n.jsx)(a.li,{children:"After providing the correct 2FA code, the user is brought to the home page"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-3---quest-creation",children:"Use Case 3 - Quest Creation"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to create a new quest."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant HomePage\n    participant QuestTab\n    participant Backend\n    participant GPTBot\n    participant Database as MongoDB\n    User->>HomePage: Navigates to home page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home page\n    deactivate HomePage\n    User->>QuestTab: Selects "Quests" tab\n    activate QuestTab\n    QuestTab--\x3e>User: Displays "Create Quest" button\n    User->>QuestTab: Selects "Create Quest" button\n    QuestTab--\x3e>User: Displays quest creation form\n    User->>QuestTab: Fills out form \n    QuestTab--\x3e>User: Displays review input option\n    User->>QuestTab: Selects "Confirm" button\n    QuestTab->>Backend: Sends form data to backend\n    deactivate QuestTab\n    activate Backend\n    Backend->>GPTBot: Processes request to generate quest\n    activate GPTBot\n    GPTBot--\x3e>Backend: Returns generated quest\n    deactivate GPTBot\n    Backend->>Database: Stores generated quest\n    activate Database\n    Database--\x3e>Backend: Quest stored\n    deactivate Database\n    Backend--\x3e>QuestTab: Displays the new quest line\n    deactivate Backend\n    activate QuestTab\n    QuestTab--\x3e>User: Displays the new quest line\n    deactivate QuestTab\n    deactivate User'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"From the home page, the user selects the \u201cQuests\u201d tab."}),"\n",(0,n.jsx)(a.li,{children:"The user selects the \u201cCreate Quest\u201d button."}),"\n",(0,n.jsxs)(a.li,{children:["The user fills out a form for the following:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Quest Title"}),"\n",(0,n.jsx)(a.li,{children:"Coding Topic"}),"\n",(0,n.jsx)(a.li,{children:"Amount of problems"}),"\n",(0,n.jsx)(a.li,{children:"Difficulty level"}),"\n",(0,n.jsx)(a.li,{children:"Enemy"}),"\n",(0,n.jsx)(a.li,{children:"Background"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"User reviews their input and selects the \u201cConfirm\u201d button."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-4---create-avatar",children:"Use Case 4 - Create Avatar"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to create their Avatar."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant HomePage\n    participant AvatarTab\n    participant AvatarSelection\n    participant ColorScheme\n    participant Backend\n    participant Database\n    User->>HomePage: Navigates to home page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home screen with "Avatar" button\n    HomePage->>AvatarTab: Selects "Avatar" button\n    deactivate HomePage\n    activate AvatarTab\n    AvatarTab--\x3e>User: Displays "Create Avatar" button\n    User->>AvatarTab: Selects "Create Avatar" button\n    AvatarTab->>AvatarSelection: Opens avatar selection screen\n    deactivate AvatarTab\n    activate AvatarSelection\n    AvatarSelection--\x3e>User: Displays six avatar options\n    User->>AvatarSelection: Chooses an avatar\n    AvatarSelection->>ColorScheme: User proceeds to color scheme selection\n    deactivate AvatarSelection\n    activate ColorScheme\n    ColorScheme--\x3e>User: Displays color-scheme customization options\n    User->>ColorScheme: Selects color-scheme\n    ColorScheme->>Backend: Sends avatar and color-scheme details to backend\n    deactivate ColorScheme\n    activate Backend\n    Backend->>Database: Stores avatar and color-scheme details\n    activate Database\n    Database--\x3e>Backend: Confirms avatar update\n    deactivate Database\n    Backend--\x3e>AvatarTab: Sends success message to avatar tab\n    deactivate Backend\n    activate AvatarTab\n    AvatarTab--\x3e>User: Displays success message and updated avatar preview\n    deactivate AvatarTab\n    deactivate User '}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:'From the homepage, the user selects "Avatar" tab.'}),"\n",(0,n.jsx)(a.li,{children:"The user selects between six avatar options."}),"\n",(0,n.jsx)(a.li,{children:"The user selects a color-scheme for the selected avatar."}),"\n",(0,n.jsx)(a.li,{children:'User selects "Save Changes" button.'}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-5---starting-a-quest",children:"Use Case 5 - Starting a Quest"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to start a quest they made."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant HomePage\n    participant QuestsTab\n    participant DropdownMenu\n    participant QuestDisplay\n    participant Database\n    participant Backend\n    participant Game\n    User->>HomePage: Navigates to home page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home screen with "Quests" button\n    HomePage->>QuestsTab: User selects "Quests" tab\n    deactivate HomePage\n    \n    activate QuestsTab\n    QuestsTab->>DropdownMenu: Opens dropdown menu\n    activate DropdownMenu\n    deactivate QuestsTab\n    DropdownMenu->>User: Displays "My Quests" option\n    User->>DropdownMenu: Selects "My Quests"\n    DropdownMenu->>QuestDisplay: Displays list of user-created quests\n    deactivate DropdownMenu\n    activate QuestDisplay\n    QuestDisplay--\x3e>User: User views quests\n    User->>QuestDisplay: Selects a quest to start\n    QuestDisplay->>Backend: Sends selected quest to backend for initiation\n    deactivate QuestDisplay\n    activate Backend\n    Backend->>Database: Updates quest status to active\n    activate Database\n    Database--\x3e>Backend: Confirms quest start\n    deactivate Database\n    Backend--\x3e>Game: Initial game component\n    activate Game\n    deactivate Backend\n    Game--\x3e>User: Displays game window as quests begins\n    deactivate User\n    deactivate Game'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:'From the homepage, the user selects "Quests" tab.'}),"\n",(0,n.jsx)(a.li,{children:'The user selects the dropdown menu option, "My Quests."'}),"\n",(0,n.jsx)(a.li,{children:"The quests the user made are displayed, the user selects the quests interested in starting."}),"\n",(0,n.jsx)(a.li,{children:'The user selects "Start Quest" button.'}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-6---playing-a-quest-solo",children:"Use Case 6 - Playing a Quest Solo"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Two users want to solve a coding problem together during a quest."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant Game\n    participant Timer\n    participant CodeEditor as Editor\n    participant GPTBot\n    participant Backend\n    User->>Game: Starts quest\n    activate User\n    activate Game\n    Game->>User: Prompt with coding question\n    Game--\x3e>User: Displays quest briefing with story\n    Game->>Timer: Starts countdown\n    activate Timer\n    loop Timer countdown\n        Timer--\x3e>Game: Timer ticks down\n        alt Timer reaches 0\n            Game->>User: Display user health bar decreaseing\n            Timer->>Game: Reset timer or end game if player health is 0\n        end\n    end\n    deactivate Timer\n    \n    User->>Editor: Writes code\n    activate Editor\n    User->>Editor: Clicks "Submit" button\n    Editor->>Backend: Sends code for analysis\n    deactivate Editor\n    activate Backend\n    Backend->>GPTBot: Analyzes submission\n    activate GPTBot\n    GPTBot--\x3e>Backend: Provides feedback with rating (1-3)\n    deactivate GPTBot\n    Backend--\x3e>Game: Sends feedback and rating\n    deactivate Backend\n    Game->>User: Displays feedback\n    alt Rating 1\n        Game->>User: Decreases user\'s health, prompts retry\n    else Rating 2\n        Game->>User: Provides tips, offers choice to retry or continue\n    else Rating 3\n        Game->>User: User successfully attacks, moves to next question\n    end\n    deactivate Game\n    deactivate User'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The quest begins by displaying the quest briefing to the user, providing a story for the user."}),"\n",(0,n.jsxs)(a.li,{children:["The game screen is now displayed to the user where they can see:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"User's avatar"}),"\n",(0,n.jsx)(a.li,{children:"User's health bar"}),"\n",(0,n.jsx)(a.li,{children:"Enemy"}),"\n",(0,n.jsx)(a.li,{children:"Enemy's health bar"}),"\n",(0,n.jsx)(a.li,{children:"Timer"}),"\n",(0,n.jsx)(a.li,{children:"Code Editor"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"The user is prompted with a question."}),"\n",(0,n.jsxs)(a.li,{children:["The timer begins to tick down.","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If the user does not submit an answer before the timer reaches 0, then the user's health bar decreases."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"The user writes code in the provided code editor."}),"\n",(0,n.jsx)(a.li,{children:'The user clicks the "Submit" button.'}),"\n",(0,n.jsx)(a.li,{children:"The GPT-bot analyzes the user's submission and provides feedback with a rating from 1 to 3."}),"\n",(0,n.jsxs)(a.li,{children:["Based on the GPT-bot\u2019s rating:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Feedback is provided to the user"}),":","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If the rating is 1, the user\u2019s health bar decreases, and the quest continues with the timer reset for a new attempt."}),"\n",(0,n.jsx)(a.li,{children:"If the rating is 2, the user receives tips on improving their solution and chooses to try again or continue."}),"\n",(0,n.jsx)(a.li,{children:"If the rating is 3, the user successfully damages the enemy, the enemy\u2019s health bar decreases, and the user proceeds to the next question if available."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"The user continues to engage with the quest until all questions are answered, the user quits, or the user\u2019s health bar reaches zero."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-7---creating-a-party-to-start-a-quest",children:"Use Case 7 - Creating a Party to Start a Quest"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to start a quest outside of a guild."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User as User 1\n    actor Peer as User 2\n    participant HomePage\n    participant QuestTab\n    participant Backend\n    participant Database as MongoDB\n    User->>HomePage: Navigates to home page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home page\n    deactivate HomePage\n    User->>QuestTab: Selects "Quests" tab\n    activate QuestTab\n    QuestTab--\x3e>User: Displays "My Quests"\n    User->>QuestTab: Selects "My Quests"\n    QuestTab--\x3e>User: Displays available quests\n    User->>QuestTab: Selects the quest to start\n    QuestTab--\x3e>User: Displays "Start Quest" button\n    User->>QuestTab: Selects "Start Quest" button\n    QuestTab--\x3e>User: Asks to create a party code\n    User->QuestTab: Creates party code\n     QuestTab->>Backend: Sends party code\n    deactivate QuestTab\n    activate Backend\n    Backend->>Database: Stores party code\n    activate Database\n    deactivate Database\n    deactivate Backend\n    User->>Peer: Shares party code with peer(s)\n    activate Peer\n    Peer->>Backend: Joins party using code\n    activate Backend\n    Backend->>Database: Updates party members count\n    activate Database\n    Database--\x3e>Backend: Party size updated\n    deactivate Database\n    Backend--\x3e>User: Displays party size\n    deactivate Backend\n    User->>QuestTab: Selects "Start Quest" button when party is 2-4 members\n    activate QuestTab\n    QuestTab->>Backend: Starts the quest\n     deactivate QuestTab\n    activate Backend\n    Backend->>Database: Updates quest status\n    activate Database\n    Database--\x3e>Backend: Quest Started set to true\n    deactivate Database\n    Backend--\x3e>User: Quest has started\n    deactivate User\n    Backend--\x3e>Peer: Quest has started\n    deactivate Peer\n    deactivate Backend'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"From the homepage, the user selects the \u201cQuests\u201d tab."}),"\n",(0,n.jsx)(a.li,{children:"The user selects \u201cMy Quests\u201d."}),"\n",(0,n.jsx)(a.li,{children:"The user selects the quest they want to do."}),"\n",(0,n.jsx)(a.li,{children:"The user selects the \u201cStart Quest\u201d button."}),"\n",(0,n.jsx)(a.li,{children:"The user creates a party code and shares it with their peer(s)."}),"\n",(0,n.jsx)(a.li,{children:"The user waits for party size to be at two to four members, then clicks the \u201cStart Quest\u201d button."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-8---join-a-party",children:"Use Case 8 - Join a Party"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"A user wants to join another user\u2019s party."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User\n    participant HomePage\n    participant JoinPartyForm\n    participant Backend\n    participant Database as MongoDB\n    User->>HomePage: Navigates to home page\n    activate User\n    activate HomePage\n    HomePage--\x3e>User: Displays home page with "Join Party" button\n    HomePage->>JoinPartyForm: Clicks "Join Party" button\n    deactivate HomePage\n    activate JoinPartyForm\n    JoinPartyForm--\x3e>User: Displays form to enter party code\n    JoinPartyForm--\x3e>User: Displays "join" button\n    User->>JoinPartyForm: Enters party code\n    User->>JoinPartyForm: Selects "Join" button\n    JoinPartyForm->>Backend: Sends party code to backend\n    activate Backend\n    Backend->>Database: Validates party code and updates party members\n    activate Database\n    Database--\x3e>Backend: Party code valid, member added\n    deactivate Database\n    Backend--\x3e>JoinPartyForm: Confirms successful party join\n    deactivate Backend\n    JoinPartyForm--\x3e>User: Displays confirmation of joining the party\n    deactivate User\n    deactivate JoinPartyForm'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"From the home page, the user clicks on the \u201cJoin Party\u201d button."}),"\n",(0,n.jsx)(a.li,{children:"The user enters the party code."}),"\n",(0,n.jsx)(a.li,{children:"The user selects the \u201cJoin\u201d button."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"use-case-9---playing-a-quest-with-a-party",children:"Use Case 9 - Playing a Quest with a Party"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Two users want to solve a coding problem together during a quest."})}),"\n",(0,n.jsx)(a.mermaid,{value:'sequenceDiagram\n    actor User1 as User 1\n    actor User2 as User 2\n    participant Game\n    participant Timer\n    participant CodeEditor as Editor\n    participant GPTBot\n    participant Backend\n\n    User1->>Game: Starts quest\n    activate User1\n    activate Game\n    Game->>User1: Prompt with coding question\n    Game--\x3e>User1: Displays quest briefing with story\n    Game->>Timer: Starts countdown\n    activate Timer\n    loop Timer countdown\n        Timer--\x3e>Game: Timer ticks down\n        alt Timer reaches 0\n            Game->>User1: Display user health bar decrease\n            Timer->>Game: Reset timer or end game if player health is 0\n        end\n    end\n    deactivate Timer\n    \n    User1->>Editor: Writes code\n    activate Editor\n    User1->>Editor: Clicks "Submit" button\n    User2->>Editor: Adds to code\n    activate User2\n    User2->>Editor: Clicks "Submit" button\n    deactivate User2\n    Editor->>Backend: Sends code for analysis\n    deactivate Editor\n    activate Backend\n    Backend->>GPTBot: Analyzes submission\n    activate GPTBot\n    GPTBot--\x3e>Backend: Provides feedback with rating (1-3)\n    deactivate GPTBot\n    Backend--\x3e>Game: Sends feedback and rating\n    deactivate Backend\n    Game->>User1: Displays feedback\n    alt Rating 1\n        Game->>User1: Decreases user\'s health, prompts retry\n    else Rating 2\n        Game->>User1: Provides tips, offers choice to retry or continue\n    else Rating 3\n        Game->>User1: User successfully attacks, moves to next question\n    end\n    deactivate Game\n    deactivate User1'}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The quest begins by displaying the quest briefing to the user, providing a story for the user."}),"\n",(0,n.jsxs)(a.li,{children:["The game screen is now displayed to the user where they can see:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"User's avatar"}),"\n",(0,n.jsx)(a.li,{children:"User's health bar"}),"\n",(0,n.jsx)(a.li,{children:"Enemy"}),"\n",(0,n.jsx)(a.li,{children:"Enemy's health bar"}),"\n",(0,n.jsx)(a.li,{children:"Timer"}),"\n",(0,n.jsx)(a.li,{children:"Code Editor"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"The user is prompted with a question."}),"\n",(0,n.jsxs)(a.li,{children:["The timer begins to tick down.","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If the user does not submit an answer before the timer reaches 0, then the user's health bar decreases."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"The user writes code in the provided code editor."}),"\n",(0,n.jsx)(a.li,{children:'The user clicks the "Submit" button.'}),"\n",(0,n.jsx)(a.li,{children:"The second user in the party adds onto the code editor to solve the problem if needed."}),"\n",(0,n.jsx)(a.li,{children:'The second user clicks the "Submit" button.'}),"\n",(0,n.jsx)(a.li,{children:"The GPT-bot analyzes the user's submission and provides feedback with a rating from 1 to 3."}),"\n",(0,n.jsx)(a.li,{children:"Based on the GPT-bot\u2019s rating:"}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Feedback is provided to the user"}),":","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If the rating is 1, the user\u2019s health bar decreases, and the quest continues with the timer reset for a new attempt."}),"\n",(0,n.jsx)(a.li,{children:"If the rating is 2, the user receives tips on improving their solution and chooses to try again or continue."}),"\n",(0,n.jsx)(a.li,{children:"If the rating is 3, the user successfully damages the enemy, the enemy\u2019s health bar decreases, and the user proceeds to the next question if available."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.ol,{start:"11",children:["\n",(0,n.jsx)(a.li,{children:"The two users continue to engage with the quest until all questions are answered, the user quits, or the user\u2019s health bar reaches zero."}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>c});var n=t(96540);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);