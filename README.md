# Codebook
Interactive notebooks made simple! For everyone who want's to document, share or present code!
The goal of this project is to make notebooks fun, usefull and easy to share.
You will be able to work on codebooks in an easy web-based UI. You can work on it with other people and share presentations of it.
For the first version this will only work for javascript, but it should definitely be possible to use other languages like python or ruby as well.

## Project status
I just started to work on this project, so please feel free to help if it sounds interesting to you!
Later in this readme, you can find a roadmap for the first fiew versions, as well as some other ideas.

## Motivation
If you ever used Jupyter notebooks you know that they are just awesome! But I also see some major disadvantages in them:
- It's not online (JupyterHub is only somewhat a solution to this)
- The notebooks are not easy to versionize
- You can send the notebook around, but then your colleagues and your boss need to run it, install packages and... urgh
- It's not nice to present to others. Sending notebooks to managers does not make them happy most of the time.

Codebook wants to solve those issues by making it easy to use. You know, like it's 2020

## Project Structure
This repo contains only the UI/Frontend of the codebook project. The backend will be developed in another Repo.
I chose angular because it's easy and go because there is this package [otto](https://github.com/robertkrimen/otto) wich seems to be ideal for the code-execution thing.
It's also lightweight, fast and can handle a lot websocket connections, and it's awesome!

In a later version it might be a good idea to split the frontend and the backend, but for now let's keep it simple!

## Roadmap / Tasks
### Version 0.1.0
- [ ] Create a minimal client/UI (web based and online!)
- [ ] Implement the backend
  - [ ] code execution
  - [ ] UI connection (websockets?)
- [ ] Define how codebooks can be exported, imported and saved (json?)

### Version 0.2.0
- [ ] Support different types of cells:
  - [ ] Markdown
  - [ ] JSON
  - [ ] Javascript object/array view (similar to the chromeium console view)
- [ ] Add auth/user functionality
- [ ] Add saving of codebooks in the cloud

### Other ideas
- Having charts and other visualizations is also a must for a stable version. [Observable HQ](https://observablehq.com/) did an awesome job on that. This might be a lot more complex so I'll leave that for the future.
- Desktop and mobile apps are good ideas, espesially when someone want's to use Codebook locally only.

### Stuff I don't think is needed (change my mind)
- Versioning. Codebooks are meant to work with Git or other tools, for now versioning would be very OP
