class XMLUtil {
  static parseXML(xml){
    //Retrieving xml data from server and converting to json to manipulate
    var guests = [];
    $(xml).find('dataset').each(function () {
      $(xml).find('record').each(function () {
        var obj = {
          "id": guests.length,
          "first_name": $(this).find('first_name').text(),
          "last_name": $(this).find('last_name').text(),
          "company": $(this).find('company').text()
        }
        guests.push(obj);
      });
    });
    return guests;
  }
  static handleParseException(response){
    console.log('parsing failed', ex);
  }
}

export {XMLUtil as default}
