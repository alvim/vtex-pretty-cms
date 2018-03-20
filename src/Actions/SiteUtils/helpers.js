export function getSkuJson() {
    let skuJson = {}

    document.querySelectorAll('head script').forEach(item => {
        let t = item.innerHTML
        if (~t.indexOf('var skuJson_0')) {
            skuJson = JSON.parse(t.replace(/(var skuJson_0 = )|(\;.+)/g, ''))
        }
    })

    getSkuJson = () => skuJson
    return skuJson
}

export function getVtxctx() {
    let vtxctx = {}

    document.querySelectorAll('head script').forEach(item => {
        let t = item.innerHTML
        if (~t.indexOf('vtxctx =')) {
            t = t.replace('vtxctx = ', '')
            vtxctx = eval(`((function(){ return ${t} })())`)
        }
    })

    getVtxctx = () => vtxctx
    return vtxctx
}