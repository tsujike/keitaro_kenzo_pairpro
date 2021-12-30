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
    fileArray.push(name, id,size,date);
  }

  console.log(fileArray); //	[ '20200206_093839_Services',  '1iq9H_2SNcB0egbytSkhHy9y7dGXTfrC0' ]




// const file1 = files.next();
// console.log(file1.getName());

// const rename1 = file1.setName('hoge.pdf');
// console.log(rename1.getName());

}
