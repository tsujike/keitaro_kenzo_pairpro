function myFunction() {

  const folder = DriveApp.getFolderById('1-0CaujNc2k6ZEH34uwEDHHPB8Gw703pR');

  const files = folder.getFilesByType(MimeType.PDF);

  const fileArray = [];

  while (files.hasNext()) {
    const file = files.next();
    const name = file.getName().replace(/\..+$/, "");
    const id = file.getId();
    const size = '';
    const date = '';
    fileArray.push([id, name, size, date]);
  }

  // console.log(fileArray); //	[ '20200206_093839_Services',  '1iq9H_2SNcB0egbytSkhHy9y7dGXTfrC0' ]

  //スプレッドシートに貼り付ける
  const ss = SpreadsheetApp.openById('1klGkAcbet6NM66Q1L-bprHxmjtKz1KUQ3ooEF-wGdbk');
  const sheet = ss.getActiveSheet();
  sheet.getRange(2, 1, fileArray.length, fileArray[0].length).setValues(fileArray);



}

function reName() {

  const ss = SpreadsheetApp.openById('1klGkAcbet6NM66Q1L-bprHxmjtKz1KUQ3ooEF-wGdbk');
  const sheet = ss.getActiveSheet();
  const records = sheet.getDataRange().getValues(); //[[id,ファイル名,容量,読取り日,rename],[],[]]
  const renameArray = records.map(record => record[4]);
  renameArray.shift();
  // console.log(renameArray); //[ 'ファイル名_20211231.pdf','ファイル名_20211231.pdf','ファイル名_20211231.pdf',

  const folder = DriveApp.getFolderById('1-0CaujNc2k6ZEH34uwEDHHPB8Gw703pR');

  const files = folder.getFilesByType(MimeType.PDF);

  let i = 0;
  while (files.hasNext()) {
    const file = files.next();
    const rename = renameArray[i];
    file.setName(rename);
    i++;
  }


}

