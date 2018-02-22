# API Docs
-------------------

Class Popup
--------------------
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

Class CMS
-------------------

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
TODO | ...

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
