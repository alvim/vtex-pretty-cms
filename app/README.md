# Docs


## Summary

* Classes
  * [Popup](#class-popup)
  * [CMS](#class-cms)
    * [TemplatesManager](#pencil-templatesmanager)
    * [CustomElementsManager](#nutandbolt-customelementsmanager)
    * [URLBuilder](#globewithmeridians-urlbuilder)
    * [FilesManager](#filefolder-filesmanager)
    * [ClustersManager](#grapes-clustersmanager)
    * [SitesManager](#earthamericas-sitesmanager)

-------------------
## Class: Popup
Identifies currently available actions based on current route and specific conditions and shows these.

Method | Descritpion
---------|----------
pushAction(Action) | add Action to actions list
getState() | return State
getAvailableActions() | return available [Actions] based on current state

```javascript
State = {
  // Store info
  // Route info for detecting when in CMS or in a product page, for example.
}

Action = {
  text: String,
  description: String,
  callback: Function,
  icon: String,
  style: Object,
  condition: function(currentState){ return Boolean } // return true if available in current state.
}
```
-------------------

## Class: CMS

Class | Description
------|------------
TemplatesManager | Manages Templates, SubTemplates and Shelves
CustomElementsManger | Manages CustomElements
URLBuilder | Manages URL's
FilesManager | Manages Files
ClustersManager | Manages Collections
SitesManager | Manages Sites and Channels

#### :pencil: TemplatesManager
Method | Description
-------|------------
getAllTemplates() | return [Template]
getAllSubTemplates() | return [SubTemplate]
getAllShelves() | return [Shelf]
getTemplate(templateId) | return Template
getTemplate(subTemplateId) | return SubTemplate
getTemplate(shelfId) | return Shelf
saveTemplate(templateName, templateId, content) | return Promise
saveSubTemplate(subTemplateName, templateId, content) | return Promise
saveShelf(shelfName, shelfId, content, className) | return Promise
static validateTemplate(Template|SubTemplate|Shelf) | return Boolean based on HTML validation

#### :nut_and_bolt: CustomElementsManager
Method | Description
-------|------------
TODO | ...

#### :globe_with_meridians: URLBuilder
Method | Description
-------|------------
TODO | ...

#### :file_folder: FilesManager
Method | Description
-------|------------
TODO | ...

#### :grapes: ClustersManager
Method | Description
-------|------------
TODO | ...

#### :earth_americas: SitesManager
Method | Description
-------|------------
TODO | ...
