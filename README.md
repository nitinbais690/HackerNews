# React-Native-HackerNews

A `React Native` interactive language `HackerNews`  New app that shows multiple-news to help an English user learn people to show news.

### System requirements

- Node
- npm OR yarn
- CocoaPods
- XCode
- AndroidStudio

For setting up the whole environment for react-native apps, check out [this](https://reactnative.dev/docs/environment-setup).

### Installation

Install the dependencies and devDependencies and start the server.
```sh
$ git clone https://github.com/nitinbais690/HackerNews.git
$ cd HackerNews
$ yarn
```

### Run Apps

Run iOS
```sh
$ npx pod-install ios
$ yarn ios
```
Run Android

- Open android emulator
- Run the following command
```sh
$ yarn android
```

`Note`: In case of any error while running the anroid verison of the app, build the app from the Android Studio and then run it on the emulator.

### Structure
```
  src
  ├── assets
  │   └── fonts
  │       ├── OpenSans-SemiBold
  │       ├── OpenSans-Medium
  |       ├── OpenSans-Light
  |       |── OpenSans-Bold
  |       └── OpenSans-Regular
  └──features
        |- domain
        |	    |– api/
        |	    |   ├── https.ts
        |     |   └── topstories.ts
        |     |
        |     └──   entities      
        |            	 └── story.ts
        |               
        └── presentation
              |- components
              |      |– atoms/
              |      |	 |- Loader	   
              |      |	 |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── Loader.test.tsx    
              |      |   |
              |      |	 |- RowContainer	   
              | 	   |   |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── RowContainer.test.tsx  
              |      |   |
              |      |	 |- TextView	   
              |      |   |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── TextView.test.tsx    
              |      |   |
              |      |   |- Touchable	   
              |      |   |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── Touchable.test.tsx 
              |      |   |
              |      |	 └── Wrapper	   
              |      |        ├── index.tsx
              |      |        ├── styles.ts
              |      |        └── Wrapper.test.tsx    
              |      |
              |      |– molecules/
              |      |	 |- Container	   
              |    	 |   |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── Container.test.tsx  
              |      |   |
              |      |	 |- Heading	   
              |      |   |     ├── index.tsx
              |      |   |     ├── styles.ts
              |      |   |     └── Heading.test.tsx    
              |      |   |
              |      |   └── Label	   
              |      |       ├── index.tsx
              |      |       ├── styles.ts
              |      |       └── Label.test.tsx 
              |      |  
              |      |– organisms/
              |      |	  └── StoryItemView	   
              |      |	       ├── index.tsx
              |      |         ├── styles.ts
              |      |         └── StoryItemView.test.tsx    
              |      |  
              |      |– templates/
              |        	   └── TopStories	   
              |      	           ├── index.tsx
              |                  ├── styles.ts
              |                  └── TopStories.test.tsx    
              |- hooks/     
              |     └── useTopStories.ts
              |
              |- screens/     
              |     └── TopStories	   
              |      	        ├── index.tsx
              |               └── styles.ts
              |- theme/
              |    	|- colors.ts	   
              |    	|- mixins.ts        
              |    	|- spacing.ts	      	
              |     └── typography.ts 
              |
              └── utils/
                  	|- helpers.ts	   
                  	└── __test__/             	
                          └── helpers.test.ts    
                        
```
### Development

- `Project Structure`: Used Partail CLEAN with Atomic Architecture.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.

### Improvements

- UI improvements.
- Some typescript error need to fix.
- Integration and snapshot test implementation.
