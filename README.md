# VTEX Pretty CMS

A Chrome Extension to enhance VTEX CMS front-end.

## Summary

* [Actions](#actions)
* [Communication flow](#communication-flow)
* Classes
  * [Popup](#class-popup)
  * [CMS](#class-cms)
    * [ThemesManager](#package-themesmanager)
    * [TemplatesManager](#pencil-templatesmanager)
    * [CustomElementsManager](#nutandbolt-customelementsmanager)
    * [URLBuilder](#globewithmeridians-urlbuilder)
    * [FilesManager](#filefolder-filesmanager)
    * [ClustersManager](#grapes-clustersmanager)
    * [SitesManager](#earthamericas-sitesmanager)
  * [SiteUtils](#class-siteutils)


-------------------
## Actions

Everything that can be done with this extension is done by actions. An action is divided in two parts:
* A method which is located in content script and it's what do the action itself.
* Metadata read by the popup.

```javascript
Action = {
  method: function name(currentState[, actionsContainer]){
    // Just an idea, but should I return the actionsContainer
    // so I could create chained actions in the future?
  },
  name: String, // Optional if the method isn't anonymous
  title: String,
  description: String,
  icon: String,
  style: Object,
  condition: function(currentState){ return Boolean } // return true if available in current state.
}
```

```
// CS and PP

import * from './Actions'
```

-------------------
## Communication flow

```
PP: Popup
CS: Content script

PP on selected tab change or update => request state to CS
CS on state requested => Send state
PP on state received => PP set state and update view
```
-------------------
## Class: Popup
Identifies currently available actions based on current route and specific conditions and enable them.

Method | Description | Version
-------|-------------|--------
pushAction(Action) | add Action to actions list | 0.1.0
setState(State) | Set state | 0.1.0
getState() | Return state | 0.1.0
getAvailableActions() | return available [Action] based on current state | 0.1.0
static parseState() | return State | 0.1.0

```javascript
State = {
  // Store info
  // Route info for detecting when in CMS or in a product page, for example.
}
```
-------------------

## Class: CMS
Several functionalities to enhance VTEX CMS frontend.

Class | Description
------|------------
ThemesManager | Manages Themes (every classes below together)
TemplatesManager | Manages Templates, SubTemplates and Shelves
CustomElementsManger | Manages CustomElements
URLBuilder | Manages URL's
FilesManager | Manages Files
ClustersManager | Manages Collections
SitesManager | Manages Sites and Channels

#### :package: ThemesManager
Method | Description | Version
-------|-------------|----------
TODO | ... | x.x.x

#### :pencil: TemplatesManager
Method | Description | Version
-------|-------------|--------------------
getAllTemplates() | return [Template] | 0.1.0
getAllSubTemplates() | return [SubTemplate] | 0.1.0
getAllShelves() | return [Shelf] | 0.1.0
getTemplate(templateId) | return Template | 0.1.0
getTemplate(subTemplateId) | return SubTemplate | 0.1.0
getTemplate(shelfId) | return Shelf | 0.1.0
saveTemplate(templateName, templateId, content) | return Promise | 0.1.0
saveSubTemplate(subTemplateName, templateId, content) | return Promise | 0.1.0
saveShelf(shelfName, shelfId, content, className) | return Promise | 0.1.0
static validateTemplate(Template\|SubTemplate\|Shelf) | return (Boolean\|String) based on HTML validation | 0.2.0

#### :nut_and_bolt: CustomElementsManager
Method | Description | Version
-------|-------------|--------
TODO | ... | x.x.x

#### :globe_with_meridians: URLBuilder
Method | Description | Version
-------|-------------|--------
TODO | ... | x.x.x

#### :file_folder: FilesManager
Method | Description | Version
-------|-------------|--------
TODO | ... | x.x.x

#### :grapes: ClustersManager
Method | Description | Version
-------|-------------|--------
TODO | ... | x.x.x

#### :earth_americas: SitesManager
Method | Description | Version
-------|-------------|--------
TODO | ... | x.x.x

---------------------
## Class: SiteUtils
On site functionalities to boost admin experience.

Method | Description | Version
-------|-------------|--------
goToCurrentProduct() | Navigate to current product admin page | 0.2.0