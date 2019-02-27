---
layout: post
category: writing
published: true
tldr: "The futuristic world where we can shop through our voice assistants has been slow to arrive. What fundamental limitations of voice interfaces as a medium hold back their potential for voice shopping?"
---
Right now, there’s a lot of excitement around conversational interfaces, especially voice interfaces like Alexa and Google Assistant, and their potential to reshape online shopping. Established players like Amazon and Google as well as startups like SnapTravel are heavily betting that in the future, you and I can ask our personal voice assistants to buy for us whatever our hearts desire. Parts of that future is already available. but much still remains beyond the horizon.

Voice shopping is struggling to take off. Only 2% of Alexa-enabled device owners purchased something using their voice in 2018, according to [Amazon’s internal figures reported by The Information](https://www.theinformation.com/articles/the-reality-behind-voice-shopping-hype). Of those 2%, 10% tried purchasing by voice again. That means the Alexa voice shopping market in 2018 is only 0.2% of the Alexa user base.

There are several important figures to examine here. The first figure is that 98% of Alexa-enabled device owners did not think to try shopping by voice. It is unlikely that so many people were unaware that Alexa offers voice shopping, because Amazon has lavishly advertised the functionality and there has also been significant consumer media coverage around it.

The second figure is that 90% of Alexa users did not try voice shopping again after their first time. I think (and will argue in this piece), that the 90% attrition rate can be attributed to some current technological and fundamental limitations of voice interfaces and the medium of speech. I do not think that product availability is not a significant barrier, given that Amazon probably has the largest product catalog in the world and in history. Drawing from publicly available data, research, and my own professional experience in the conversational interface domain, I will examine the limitations that are fundamental to voice interfaces as a medium that pose as obstacles to enjoyable, efficient voice shopping experiences.

In a future piece, I will discuss and propose solutions that can mitigate the limitations of conversational and voice interfaces.

### Some working terminology
I use the terms **conversational interfaces** and **voice interfaces** carefully. They are not mutually interchangeable.

A **conversational user interface** (CUI) is an interface where users can interact with it through textual or verbal dialogue, as opposed to a graphical user interface (GUI) where users manipulate and interact with visual and textual elements.

A **voice user interface** (VUI) is a specific kind of conversational interface where the primary mode of interaction is verbal, not textual, dialogue. We can distinguish VUIs as being either pure or hybrid by whether or not they have a supplementary mode of interaction. A **pure VUI** has verbal dialogue as its *only* mode of interaction, whereas a **hybrid VUI** mixes in elements of GUIs to supplement verbal dialogue.  

### No visual information
A pure voice interface can only describe but not show images. This inability to show images to the user is the most serious impediment to the user's purchase decision making process because visual information is one of the most effective purchase decision drivers. To put it simply: people want to see what they're buying.

A hybrid voice interface, like that of the Amazon Echo Show, can leverage a screen display to show images, but this approach conflicts with a primary advantage of voice interfaces: the ability to interact with the interface without the user necessarily being in the immediate proximity of the device.

### Limited information bandwidth
A voice interface has less information bandwidth—in other words, a slower information transfer rate—than a graphical interface. A rate of speech comfortable for listening is between 150 to 160 words per minute, invariable of the listener's age. Adults can read at a comfortable pace between 250 to 600 words per minute, depending on their level of education. To adult users, a GUI transfers information at a rate up to 4 times faster than a VUI. Children, who are still in the process of being educated, read at a speed less than 150 WPM. To children, a VUI can transfer information faster than a graphical interface. Since children aren't voice shopping (and probably shouldn’t be unless their parents want an unpleasant surprise on their next credit card statement), they are irrelevant as a voice shopping user segment.

We can see that there is an additional fundamental distinction between speech and text. Text can be displayed instantaneously; its characters are displayed together simultaneously. A reader can jump randomly to words of interest within their peripheral vision. Text augmentations, like text colors, can promote or demote the visual prominence of words and sentences. Speech can only be transmitted serially: words are spoken and understood one after another. A user cannot listen into the future.

The task of scanning a product list is a core shopping task. Shoppers want to explore diverse product offerings or compare similar products to decide on the optimal option. The serial nature of speech renders the task extremely time-consuming on a VUI. Consider a scenario where you ask a voice assistant to order a black shirt.

> User: “Alexa, order me a black shirt.”
>
> Alexa: “Sure. I have found a Gildan’s Men’s ultra cotton adult long sleeve shirt, color black, rated 4.5 stars.”
>
> User: “Next.”
>
> Alexa: “There are 193 other black shirts. The next one is a Gildan’s Men’s poly cotton adult t-shirt, color black, rated 4 stars…”

As you can see, voice shopping is a long process that requires a lot of talking and listening to the voice assistant. Imagine if a sales associate in a store read you the names of all the items on a shelf. It would take frustratingly long, right?

### Aural space
We live in an aurally crowded (read: noisy) world. Nowadays, a great majority of people—including myself—live in urban areas. Our daily life is filled with sound: the chatter of strangers, the background music in stores and cafes, the cacophony of city traffic, the humming of building machinery, among other sources of noise pollution.

In modern urban society, aural space is precious. The noisiness of modern life makes it difficult for our devices to hear and comprehend us with clarity. The opportunities to interact optimally with a voice interface are diminished.

This drawback will diminish as voice isolation and recognition and noise cancellation technologies improve, thereby improving the ability of devices to understand users' voices even in noisy environments.

### Audience control, or privacy

The only people (in your physical environment) who can see what you do on your laptop, tablet, or phone are the people standing directly behind or beside you—if they even care to look. When you speak to your device, everyone within earshot will hear your conversation regardless of whether they want to hear it or not.

Significant e-commerce activity occurs during traditional work hours. A graphical interface will allow a user to shop discreetly. A voice interface, with limited aural space and audience control, may be embarrassing and inappropriate for the user to use in a work environment. Use of a voice interface may be restricted to the comfort and privacy of one's own home out of technical and social considerations.

This drawback is quickly diminishing as new audience control technologies are being introduced. In October 2018, Amazon introduced Whisper Mode for Alexa where the Alexa voice assistant will recognise a whispered user command and reply quietly.

## Natural speech disfluency
Growing up, we're told to “think before we speak”. In the ideal world, spoken sentences are continuous and monolithic. In practice, our actual spoken speech is discontinuous and disjointed. The act of listening to others is an active exercise in syntactical interpretation and correction.

We plan our sentences as we construct them. Our filler words—um, uh, like, I mean—are the linguistic homologues of the spinning beach ball in macOS or the loading bar common in graphical interfaces. These words tell people, “please wait, the following section of this sentence is under construction,” in a fraction of a second. Sometimes in the middle of a sentence we will leave the sentence unfinished to build a new one. The discontinuity can be merely grammatical and the idea is kept; the discontinuity can also be semantic.

Processing and understanding these features of speech are difficult even for people, let alone machines. Machine misunderstanding is inevitable and will increase friction for interactions with a voice interface. The friction is only worsened by the lack of an editing layer in a pure voice interface.

### No editing layer

First, what is an editing layer, anyway? It’s all the ways an interface can capture and display past interactions by the user and make them editable to the user.

For example, word processing applications like Microsoft Word have traditional Cmd (or Ctrl) + Z key shortcut that will undo the user’s last action in a last-in-first-out (LIFO) fashion. Graphic applications like Adobe Photoshop allow the user to work in different layers and thereby reverse actions in a single image layer without affecting other image layers.

Speech moves ceaselessly forward in one direction only: into the future. Speech is instantaneous and ephemeral: past speech leaves only memories in the minds of its speaker and its listeners but no tangible artifacts to manipulate. Past speech cannot be changed, only amended afterward with further commands.

> User: “Alexa, order me a latte, wait, no, pumpkin spice latte.”

> Alexa: “I’m sorry, I don’t understand.”

> User: “I meant a pumpkin spice latte.”

> Alexa: “I’m sorry, I don’t understand what is a ‘bumpkin spiced latte’.”

> User: “Pumpkin. Spice. Latte.”

Alexa: “Okay, I’ll order the pumpkin spice latte at your usual Starbucks store.
When would you like to pick it up?”

Hybrid graphical-voice interfaces do have an editing layer. For example, Siri on iOS will show to the user the text of their spoken command as computationally understood by Siri and allow the user to edit that textual command to make corrections. Pure voice interfaces like Alexa do not offer this.

### High context-switching cost

What is a **context** and why is there a **cost** to switch from one to another? A context is a coherent structural-semantic setting within which interactions take place. To put it more simply, a context, in context of interfaces, is a view, a sub-view, or a conversation thread. To illustrate: this web browser page which you are reading is a context. You probably have another web browser page open—a news article, your email inbox, a social media website—in another tab; that is another context.

To change from one context to another one, you must perform an action that has a cost in terms of effort and time that is a function of the **clarity of intent of purpose** and **precision** of the action. To switch from reading this page in this tab to checking your email in another tab, you click the tab your email inbox is open in. This action is low-cost because it is **unambiguous** and **precise**. Pointing and clicking is precise: you can position your cursor exactly above your email inbox tab and nowhere else. It is also unambiguous because there is a one-to-one mapping between the email inbox tab graphical element and the email inbox page view.
, making context-switching in a voice interface high-cost. A spoken command is imprecise because it can be easily machine-misinterpreted: a spoken word can map to multiple written words. For example, the words “echo”, “Ecco” (a shoe company), and “Ekko” (a video game character) all map the same pronunciation.

Exchanging multiple messages between the speaking user and the voice assistant is not only necessary to resolve machine-misinterpreted user speech but also to disambiguate exactly which context the user intends to switch to. Take this following example exchange:

> User: “What is the best sushi restaurant?”

> Assistant: “That would be Sukiyabashi Jiro.”

> User: “What about the best Chinese place?”

Here, it is ambiguous which context (or sub-context) the user wants the assistant to switch to. It’s likely the user wants to know the best Chinese restaurant, but it’s possible that the user is searching for  random travel inspiration and really wants to know the best destination in China to visit. The user, of course, knows perfectly well in their own mind the context they want to switch to: the voice assistant, however, is not privy to the user’s thoughts and intents, therefore it must try to find the most logical mapping between the user’s spoken context-switch command and the new user-intended context.

Now that we’ve examined the general principles of context-switching and switching costs, let’s examine the voice interface context-switching and its costliness in the context of e-commerce.

Imagine you want to go to Bali and your dates are flexible. You shop around for the best vacation package and then plan your calendar around the least expensive dates to go there.

You search for several date ranges. You’re currently chatting with the assistant about packages available for January 10–17: this is your current context. The last date range you were discussing with the assistant was January 4–11, nearly but not exactly one week preceding the current date range: this is another context.

You decide that that you don’t like the vacation packages available for January 10–17 and will give January 4–11 another look-over.  You ask the assistant, “what packages were there for the week before?” The assistant can map your command to several contexts: you want to see packages for your previous search dates (January 4–11), for a date range exactly one week before (January 3–10), or for the previous calendar week (from Sunday to the next Sunday, which would be January 6–13).

To make one simple context switch in a voice interface you will expend significant time having to speak commands and listen to the assistant's replies and requests for clarification.

Until voice assistants can read and interpret users thoughts and intentions using neural implants, which are in the realm of science fiction and would render voice interfaces obsolete anyway, context-switching will remain a high-cost interaction.

### Is voice shopping viable?
Although I have outlined many fundamental limitations that disadvantage voice interfaces for shopping, I am not pessimistic: I do think that voice shopping is viable.

The capabilities and limitations of voice shopping will make it suitable for certain shopping tasks and unsuitable for others. Companies are trying to find viable use cases for voice shopping; and uncovering the unviable use cases through failure. Such is the machinery of evolution.

In a future piece, I will write about strategies to overcome the interface limitations I discussed in this piece.
