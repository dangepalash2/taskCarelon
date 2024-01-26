class Helper {
  public async formatResponseTextTOJSON(responseText: string) {
    var textString = JSON.stringify(responseText).toString();
    let re = /\\/gi;
    let formattedString = textString.replace(re, "");

    formattedString = formattedString.substring(1, formattedString.length - 1);

    var textOBJ = JSON.parse(formattedString);
    return textOBJ;
  }
}

export default new Helper();
