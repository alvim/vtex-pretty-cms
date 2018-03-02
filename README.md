# VTEX Pretty CMS

A Chrome Extension to enhance VTEX CMS front-end.

## Summary

* [Communication flow](#communication-flow)
* [Actions](#class-action)
* [ActionView](#class-actionview)
* [ActionsContainer](#class-actioncontainer)
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
## Communication flow

```
PP: Popup
CS: Content script

PP on selected tab change or update => request views to CS
CS on views requested => Send views
PP on views received => PP update view

PP send message (RUN_ACTION) => CS execute actionsContainer.dispatch
// { type: 'RUN_ACTION', name: actionName, args: [] }
```

-------------------
## Class: Action

Everything that can be done with this extension is done by actions.

Method | Description | Version
-------|-------------|--------
method name() | The action itself. It's execution context it's the ActionsContainer. It will have access to the page's DOM, since it runs on the document. Although it does not have access to the same world of user defined variables. It's lives in an <a href="https://developer.chrome.com/extensions/content_scripts#execution-environment" target="_blank">_isolated world_</a>. | 0.1.0
getView() | return ActionView \|\| false if unavailable | 0.1.0


------------------------
## Class: ActionView

The view displayed in the Popup.

------------------------
## Class: ActionsContainer

Contains and manages every action.


Method | Description | Version
-------|-------------|--------
constructor(actions: Array) | Init ActionsContainer | 0.1.0 :white_check_mark:
dispatch(actionName[, args]) | Executes an action | 0.1.0 :white_check_mark:
getViews() | return [ActionView] | 0.1.0 :white_check_mark:


-------------------

## Class: Popup
Receives actions views, displays them and dispatch actions through messages to the content script.

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