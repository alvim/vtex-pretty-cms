# Docs


## Summary

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
## Class: Popup
Identifies currently available actions based on current route and specific conditions and shows these.

Method | Descritpion | Version
---------|-----------|--------
pushAction(Action) | add Action to actions list | x.x.x
getState() | return State | x.x.x
getAvailableActions() | return available [Actions] based on current state | x.x.x

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
getAllTemplates() | return [Template] | x.x.x
getAllSubTemplates() | return [SubTemplate] | x.x.x
getAllShelves() | return [Shelf] | x.x.x
getTemplate(templateId) | return Template | x.x.x
getTemplate(subTemplateId) | return SubTemplate | x.x.x
getTemplate(shelfId) | return Shelf | x.x.x
saveTemplate(templateName, templateId, content) | return Promise | x.x.x
saveSubTemplate(subTemplateName, templateId, content) | return Promise | x.x.x
saveShelf(shelfName, shelfId, content, className) | return Promise | x.x.x
static validateTemplate(Template\|SubTemplate\|Shelf) | return (Boolean\|String) based on HTML validation | x.x.x

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