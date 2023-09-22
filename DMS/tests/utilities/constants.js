class Utilities {
    consts={
        url:"https://testapp.assetminder.io/Thingworx/FormLogin/DMS",
        userName:"dms.super",
        password:"86Dx=F.qsNfs=6tPXg!W^L!Ri6*hvn+6"
    }
    addEquipment={
        equipmentName:"Testing",
        serialNo:"11010101010"
    }
    treeSearch={
        searchNavTree:"01. C104 - Head Shaft Bearing Drive Side"
    }
    mashUpWindow={
        AssetUrl:"https://testapp.assetminder.io/Thingworx/Runtime/index.html#mashup=AssetMinder_DynamicFFTCharts_Mashup&ThingName=DMS_12.C104-GTUBend1BearingNonDriveSide(Lowtension)_88_Thing&readingOnLoad=%7B%22dataShape%22%3A%7B%22fieldDefinitions%22%3A%7B%22RMS%22%3A%7B%22name%22%3A%22RMS%22%2C%22description%22%3A%22RMS%22%2C%22baseType%22%3A%22NUMBER%22%2C%22ordinal%22%3A0%2C%22alias%22%3A%22_0%22%2C%22aspects%22%3A%7B%7D%7D%2C%22Time%22%3A%7B%22name%22%3A%22Time%22%2C%22description%22%3A%22Time%22%2C%22baseType%22%3A%22DATETIME%22%2C%22ordinal%22%3A0%2C%22alias%22%3A%22_1%22%2C%22aspects%22%3A%7B%7D%7D%7D%7D%2C%22rows%22%3A%5B%5D%7D&__nc=d35205e0-dff4-4813-b6db-830bf5a19c8f"
    }
    serviceLog={
        createTitle:"AutoTest",
        addContent:"testing"
    }

    // getPath(name)
    // {
    //     return './screenshots/'+name+'_'+'.png'
    // }
}
module.exports = new Utilities()