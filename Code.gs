/* ***********************************************************************************
 *
 *  Bible linker for Google Docs
 *
 *  A Google Documents Apps Script that searches for Bible verses and creates links to a selection of online Bible sources.
 *
 *  For more information, visit: https://github.com/majal/bible-linker-google-docs
 *
 *********************************************************************************** */
class BibleLanguage {
  constructor(name, abbreviation, books) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.books = books;
  }

  getName() {
    return this.name;
  }

  getAbbreviation() {
    return this.abbreviation;
  }

  getBooks() {
    return this.books;
  }
}
class BibleBook {
  constructor(index, name, abbr1, abbr2, issingleChapter) {
    this.index = index;
    this.name = name;
    this.abbr1 = abbr1;
    this.abbr2 = abbr2;
    this.issingleChapter = issingleChapter;
  }
  getIndex() {
    return this.index;
  }
  getName() {
    return this.name;
  }

  getAbbr1() {
    return this.abbr1;
  }

  getAbbr2() {
    return this.abbr2;
  }

  isSingleChapter() {
    return this.issingleChapter;
  }
}
const englishBibleBooks = new BibleLanguage("English", "en", [
  new BibleBook(1, "Genesis", "Ge", "Gen.", false),
  new BibleBook(2, "Exodus", "Ex", "Ex.", false),
  new BibleBook(3, "Leviticus", "Le", "Lev.", false),
  new BibleBook(4, "Numbers", "Nu", "Num.", false),
  new BibleBook(5, "Deuteronomy", "De", "Deut.", false),
  new BibleBook(6, "Joshua", "Jos", "Josh.", false),
  new BibleBook(7, "Judges", "Jg", "Judg.", false),
  new BibleBook(8, "Ruth", "Ru", "", false),
  new BibleBook(9, "1 Samuel", "1Sa", "1 Sam.", false),
  new BibleBook(10, "2 Samuel", "2Sa", "2 Sam.", false),
  new BibleBook(11, "1 Kings", "1Ki", "1 Ki.", false),
  new BibleBook(12, "2 Kings", "2Ki", "2 Ki.", false),
  new BibleBook(13, "1 Chronicles", "1Ch", "1 Chron.", false),
  new BibleBook(14, "2 Chronicles", "2Ch", "2 Chron.", false),
  new BibleBook(15, "Ezra", "Ezr", "Neh.", false),
  new BibleBook(16, "Nehemiah", "Ne", "", false),
  new BibleBook(17, "Esther", "Es", "", false),
  new BibleBook(18, "Job", "", "", false),
  new BibleBook(19, "Psalm", "Ps", "Ps.", false),
  new BibleBook(20, "Proverbs", "Pr", "Prov.", false),
  new BibleBook(21, "Ecclesiastes", "Ec", "Eccl.", false),
  new BibleBook(22, "Song of Solomon", "Ca", "Song of Sol.", false),
  new BibleBook(23, "Isaiah", "Isa", "Isa.", false),
  new BibleBook(24, "Jeremiah", "Jer", "Jer.", false),
  new BibleBook(25, "Lamentations", "La", "Lam.", false),
  new BibleBook(26, "Ezekiel", "Eze", "Ezek.", false),
  new BibleBook(27, "Daniel", "Da", "Dan.", false),
  new BibleBook(28, "Hosea", "Ho", "Hos.", false),
  new BibleBook(29, "Joel", "Joe", "", false),
  new BibleBook(30, "Amos", "Am", "", false),
  new BibleBook(31, "Obadiah", "Ob", "Obad.", true),
  new BibleBook(32, "Jonah", "Jon", "", false),
  new BibleBook(33, "Micah", "Mic", "Mic.", false),
  new BibleBook(34, "Nahum", "Na", "Nah.", false),
  new BibleBook(35, "Habakkuk", "Hab", "Hab.", false),
  new BibleBook(36, "Zephaniah", "Zep", "Zeph.", false),
  new BibleBook(37, "Haggai", "Hag", "Hag.", false),
  new BibleBook(38, "Zechariah", "Zec", "Zech.", false),
  new BibleBook(39, "Malachi", "Mal", "Mal.", false),
  new BibleBook(40, "Matthew", "Mt", "Matt.", false),
  new BibleBook(41, "Mark", "Mr", "", false),
  new BibleBook(42, "Luke", "Lu", "", false),
  new BibleBook(43, "John", "Joh", "", false),
  new BibleBook(44, "Acts", "Ac", "", false),
  new BibleBook(45, "Romans", "Ro", "Rom.", false),
  new BibleBook(46, "1 Corinthians", "1Co", "1 Cor.", false),
  new BibleBook(47, "2 Corinthians", "2Co", "2 Cor.", false),
  new BibleBook(48, "Galatians", "Ga", "Gal.", false),
  new BibleBook(49, "Ephesians", "Eph", "Eph.", false),
  new BibleBook(50, "Philippians", "Php", "Phil.", false),
  new BibleBook(51, "Colossians", "Col", "Col.", false),
  new BibleBook(52, "1 Thessalonians", "1Th", "1 Thess.", false),
  new BibleBook(53, "2 Thessalonians", "2Th", "2 Thess.", false),
  new BibleBook(54, "1 Timothy", "1Ti", "1 Tim.", false),
  new BibleBook(55, "2 Timothy", "2Ti", "2 Tim.", false),
  new BibleBook(56, "Titus", "Tit", "", false),
  new BibleBook(57, "Philemon", "Phm", "Philem.", true),
  new BibleBook(58, "Hebrews", "Heb", "Heb.", false),
  new BibleBook(59, "James", "Jas", "Jas.", false),
  new BibleBook(60, "1 Peter", "1Pe", "1 Pet.", false),
  new BibleBook(61, "2 Peter", "2Pe", "2 Pet.", false),
  new BibleBook(62, "1 John", "1Jo", "", false),
  new BibleBook(63, "2 John", "2Jo", "", true),
  new BibleBook(64, "3 John", "3Jo", "", true),
  new BibleBook(65, "Jude", "Jude", "", true),
  new BibleBook(66, "Revelation", "Re", "Rev.", false),
]);

const tagalogBibleBooks = new BibleLanguage("Tagalog", "tl", [
  new BibleBook(1, "Genesis", "", "", false),
  new BibleBook(2, "Exodus", "", "", false),
  new BibleBook(3, "Levitico", "", "", false),
  new BibleBook(4, "Bilang", "", "", false),
  new BibleBook(5, "Deutoronomio", "", "", false),
  new BibleBook(6, "Josue", "", "", false),
  new BibleBook(7, "Hukom", "", "", false),
  new BibleBook(8, "Ruth", "", "", false),
  new BibleBook(9, "1 Samuel", "", "", false),
  new BibleBook(10, "2 Samuel", "", "", false),
  new BibleBook(11, "1 Hari", "", "", false),
  new BibleBook(12, "2 Hari", "", "", false),
  new BibleBook(13, "1 Cronica", "", "", false),
  new BibleBook(14, "2 Cronica", "", "", false),
  new BibleBook(15, "Ezra", "", "", false),
  new BibleBook(16, "Nehemias", "", "", false),
  new BibleBook(17, "Esther", "", "", false),
  new BibleBook(18, "Job", "", "", false),
  new BibleBook(19, "Awit", "", "", false),
  new BibleBook(20, "Kawikaan", "", "", false),
  new BibleBook(21, "Eclesiastes", "", "", false),
  new BibleBook(22, "Awit ni Solomon", "", "", false),
  new BibleBook(23, "Isaias", "", "", false),
  new BibleBook(24, "Jeremias", "", "", false),
  new BibleBook(25, "Panaghoy", "", "", false),
  new BibleBook(26, "Ezekiel", "", "", false),
  new BibleBook(27, "Daniel", "", "", false),
  new BibleBook(28, "Oseas", "", "", false),
  new BibleBook(29, "Joel", "", "", false),
  new BibleBook(30, "Amos", "", "", false),
  new BibleBook(31, "Obadias", "", "", true),
  new BibleBook(32, "Jonas", "", "", false),
  new BibleBook(33, "Mikas", "", "", false),
  new BibleBook(34, "Nahum", "", "", false),
  new BibleBook(35, "Habakuk", "", "", false),
  new BibleBook(36, "Zefanias", "", "", false),
  new BibleBook(37, "Hagai", "", "", false),
  new BibleBook(38, "Zacarias", "", "", false),
  new BibleBook(39, "Malakias", "", "", false),
  new BibleBook(40, "Mateo", "", "", false),
  new BibleBook(41, "Marcos", "", "", false),
  new BibleBook(42, "Lucas", "", "", false),
  new BibleBook(43, "Juan", "", "", false),
  new BibleBook(44, "Gawa", "", "", false),
  new BibleBook(45, "Roma", "", "", false),
  new BibleBook(46, "1 Corinto", "", "", false),
  new BibleBook(47, "2 Corinto", "", "", false),
  new BibleBook(48, "Galacia", "", "", false),
  new BibleBook(49, "Efeso", "", "", false),
  new BibleBook(50, "Filipos", "", "", false),
  new BibleBook(51, "Colosas", "", "", false),
  new BibleBook(52, "1 Tesalonica", "", "", false),
  new BibleBook(53, "2 Tesalonica", "", "", false),
  new BibleBook(54, "1 Timoteo", "", "", false),
  new BibleBook(55, "2 Timoteo", "", "", false),
  new BibleBook(56, "Tito", "", "", false),
  new BibleBook(57, "Filemon", "", "", true),
  new BibleBook(58, "Hebreo", "", "", false),
  new BibleBook(59, "Santiago", "", "", false),
  new BibleBook(60, "1 Pedro", "", "", false),
  new BibleBook(61, "2 Pedro", "", "", false),
  new BibleBook(62, "1 Juan", "", "", false),
  new BibleBook(63, "2 Juan", "", "", true),
  new BibleBook(64, "3 Juan", "", "", true),
  new BibleBook(65, "Judas", "", "", true),
  new BibleBook(66, "Apocalipsis", "", "", false),
]);

const spanishBibleBooks = new BibleLanguage("Spanish", "es", [
  new BibleBook(1, "Génesis", "Gé", "", false),
  new BibleBook(2, "Éxodo", "Éx", "", false),
  new BibleBook(3, "Levítico", "Le", "", false),
  new BibleBook(4, "Números", "Nú", "", false),
  new BibleBook(5, "Deuteronomio", "Dt", "", false),
  new BibleBook(6, "Josué", "Jos", "", false),
  new BibleBook(7, "Jueces", "Jue", "", false),
  new BibleBook(8, "Rut", "", "", false),
  new BibleBook(9, "1 Samuel", "1Sa", "", false),
  new BibleBook(10, "2 Samuel", "2Sa", "", false),
  new BibleBook(11, "1 Reyes", "1Re", "", false),
  new BibleBook(12, "2 Reyes", "2Re", "", false),
  new BibleBook(13, "1 Cronica", "1Cr", "", false),
  new BibleBook(14, "2 Cronica", "2Cr", "", false),
  new BibleBook(15, "Esdras", "Esd", "", false),
  new BibleBook(16, "Nehemías", "Ne", "", false),
  new BibleBook(17, "Ester", "Est", "", false),
  new BibleBook(18, "Job", "", "", false),
  new BibleBook(19, "Salmos", "Sl", "", false),
  new BibleBook(20, "Proverbios", "Pr", "", false),
  new BibleBook(21, "Eclesiastés", "Ec", "", false),
  new BibleBook(22, "El Cantar de los Cantares", "Can", "", false),
  new BibleBook(23, "Isaías", "Is", "", false),
  new BibleBook(24, "Jeremías", "Jer", "", false),
  new BibleBook(25, "Lamentaciones", "Lam", "", false),
  new BibleBook(26, "Ezequiel", "Eze", "", false),
  new BibleBook(27, "Daniel", "Da", "", false),
  new BibleBook(28, "Oseas", "Os", "", false),
  new BibleBook(29, "Joel", "Joe", "", false),
  new BibleBook(30, "Amós", "Am", "", false),
  new BibleBook(31, "Abdías", "Abd", "", true),
  new BibleBook(32, "Jonás", "Jon", "", false),
  new BibleBook(33, "Miqueas", "Miq", "", false),
  new BibleBook(34, "Nahúm", "Na", "", false),
  new BibleBook(35, "Habacuc", "Hab", "", false),
  new BibleBook(36, "Sofonías", "Sof", "", false),
  new BibleBook(37, "Ageo", "Ag", "", false),
  new BibleBook(38, "Zacarías", "Zac", "", false),
  new BibleBook(39, "Malaquías", "Mal", "", false),
  new BibleBook(40, "Mateo", "Mt", "", false),
  new BibleBook(41, "Marcos", "Mr", "", false),
  new BibleBook(42, "Lucas", "Lu", "", false),
  new BibleBook(43, "Juan", "Jn", "", false),
  new BibleBook(44, "Hechos", "Hch", "", false),
  new BibleBook(45, "Romanos", "Ro", "", false),
  new BibleBook(46, "1 Corintios", "1Co", "", false),
  new BibleBook(47, "2 Corintios", "2Co", "", false),
  new BibleBook(48, "Gálatas", "Gál", "", false),
  new BibleBook(49, "Efesios", "Ef", "", false),
  new BibleBook(50, "Filipenses", "Flp", "", false),
  new BibleBook(51, "Colosenses", "Col", "", false),
  new BibleBook(52, "1 Tesalonicenses", "1Te", "", false),
  new BibleBook(53, "2 Tesalonicenses", "2Te", "", false),
  new BibleBook(54, "1 Timoteo", "1Ti", "", false),
  new BibleBook(55, "2 Timoteo", "2Ti", "", false),
  new BibleBook(56, "Tito", "Tit", "", false),
  new BibleBook(57, "Filemón", "Flm", "", true),
  new BibleBook(58, "Hebreos", "Heb", "", false),
  new BibleBook(59, "Santiago", "Snt", "", false),
  new BibleBook(60, "1 Pedro", "1Pe", "", false),
  new BibleBook(61, "2 Pedro", "2Pe", "", false),
  new BibleBook(62, "1 Juan", "1Jn", "", false),
  new BibleBook(63, "2 Juan", "2Jn", "", true),
  new BibleBook(64, "3 Juan", "3Jn", "", true),
  new BibleBook(65, "Judas", "Jud", "", true),
  new BibleBook(66, "Apocalipsis", "Ap", "", false),
]);

class Bible {
  constructor(language, translation) {
    this.language = language;
    this.translation = translation;
  }
  getLanguage() {
    return this.language;
  }

  getTranslation() {
    return this.translation;
  }
}
class BibleTranslation {
  constructor(version, name, url, hash1, hash2) {
    this.version = version;
    this.name = name;
    this.url = url;
    this.hash1 = hash1;
    this.hash2 = hash2;
  }

  getVersion() {
    return this.version;
  }

  getName() {
    return this.name;
  }

  getUrl() {
    return this.url;
  }

  getHash1() {
    return this.hash1;
  }

  getHash2() {
    return this.hash2;
  }
}

class BibleSearchResult {
  constructor(content, selectionStart, selectionEnd) {
    this.content = content;
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
  getContent() {
    return this.content;
  }

  getBibleText() {
    return this.content
      .getElement()
      .asText()
      .getText()
      .slice(
        this.content.getStartOffset(),
        this.content.getEndOffsetInclusive() + 1
      );
  }

  getSelectionStart() {
    return this.selectionStart;
  }

  getSelectionEnd() {
    return this.selectionEnd;
  }
}
class SearchElement {
  constructor(searchElement, selectionStart, selectionEnd) {
    this.searchElement = searchElement;
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
  getSearchElement() {
    return this.searchElement;
  }
  getSelectionStart() {
    return this.selectionStart;
  }
  getSelectionEnd() {
    return this.selectionEnd;
  }
}

function getBibleLink(bibleText, bibleTranslation) {
  if (bibleTranslation.getHash1() != "") {
    if (
      bibleText.getChapterStart() == bibleText.getChapterEnd() &&
      bibleText.getVerseStart() == bibleText.getVerseEnd()
    ) {
      return (
        bibleTranslation.getUrl() +
        bibleText.getBibleBook().getIndex() +
        "/" +
        bibleText.getChapterStart() +
        bibleTranslation.getHash1() +
        bibleText.getVerseStart() +
        bibleTranslation.getHash2() +
        bibleText.getBibleBook().getIndex() +
        ":" +
        bibleText.getChapterStart() +
        ":" +
        bibleText.getVerseStart()
      );
    } else {
      return (
        bibleTranslation.getUrl() +
        bibleText.getBibleBook().getIndex() +
        "/" +
        bibleText.getChapterStart() +
        bibleTranslation.getHash1() +
        bibleText.getVerseStart() +
        bibleTranslation.getHash2() +
        bibleText.getBibleBook().getIndex() +
        ":" +
        bibleText.getChapterStart() +
        ":" +
        bibleText.getVerseStart() +
        "-" +
        bibleText.getBibleBook().getIndex() +
        ":" +
        bibleText.getChapterEnd() +
        ":" +
        bibleText.getVerseEnd()
      );
    }
  } else {
    if (
      bibleText.getChapterStart() == bibleText.getChapterEnd() &&
      bibleText.getVerseStart() == bibleText.getVerseEnd()
    ) {
      return (
        bibleTranslation.getUrl() +
        bibleText.getBibleBook().getIndex() +
        String(bibleText.getChapterStart()).padStart(3, "0") +
        String(bibleText.getVerseStart()).padStart(3, "0")
      );
    } else {
      return (
        bibleTranslation.getUrl() +
        bibleText.getBibleBook().getIndex() +
        String(bibleText.getChapterStart()).padStart(3, "0") +
        String(bibleText.getVerseStart()).padStart(3, "0") +
        "-" +
        bibleText.getBibleBook().getIndex() +
        String(bibleText.getChapterEnd()).padStart(3, "0") +
        String(bibleText.getVerseEnd()).padStart(3, "0")
      );
    }
  }
}
class BibleTextParseResult {
  constructor(
    bibleBook,
    chapterStart,
    chapterEnd,
    verseStart,
    verseEnd,
    offsetStart,
    offsetEnd
  ) {
    this.bibleBook = bibleBook;
    this.chapterStart = chapterStart;
    this.chapterEnd = parseInt(chapterEnd, 10);
    this.verseStart = parseInt(verseStart, 10);
    this.verseEnd = parseInt(verseEnd, 10);
    this.offsetStart = offsetStart;
    this.offsetEnd = offsetEnd;
  }

  getBibleBook() {
    return this.bibleBook;
  }

  getChapterStart() {
    return this.chapterStart;
  }

  getChapterEnd() {
    return this.chapterEnd;
  }

  getVerseStart() {
    return this.verseStart;
  }

  getVerseEnd() {
    return this.verseEnd;
  }

  getOffsetStart() {
    return this.offsetStart;
  }

  getOffsetEnd() {
    return this.offsetEnd;
  }
}

function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  create_menu();
}

function getLanguages() {
  return [englishBibleBooks, tagalogBibleBooks, spanishBibleBooks];
}

function create_menu() {
  // Get lastest used Bible version by user
  const userProperties = PropertiesService.getUserProperties();
  var last_used_bible_version = userProperties.getProperty(
    "last_used_bible_version"
  );
  if (last_used_bible_version == null) last_used_bible_version = "nwtsty_wol";

  // Pull supported Bible versions
  const bibleVersions = getBibleVersions();
  const bibleNames = Object.assign(
    {},
    ...bibleVersions.map((x) => ({
      [x.getTranslation().getVersion()]: x.getTranslation().getName(),
    }))
  );

  // Set lastest used Bible version to the menu
  let last_used_bible_label = bibleNames[last_used_bible_version];
  let dynamic_name_bible_linker = "bible_linker_" + last_used_bible_version;
  let search_label = "🔗⠀Link verses using " + last_used_bible_label;

  // Set menu
  var ui = DocumentApp.getUi();
  var menu = ui
    .createMenu("Bible Linker")
    .addItem(search_label, dynamic_name_bible_linker);

  // Set Bible version dynamic submenus
  var bibleSubMenu = ui.createMenu("📖⠀Choose language and version ");
  let languages = getLanguages();
  for (let language of languages) {
    var bibleLanguageSubmenu = ui.createMenu(language.getName());
    for (let bibleVersion of bibleVersions.filter(
      (b) => b.getLanguage().getAbbreviation() == language.getAbbreviation()
    )) {
      let key = bibleVersion.getTranslation().getVersion();
      let dynamic_name_bible_linker = "bible_linker_" + key;
      let last_used_pointer = last_used_bible_version == key ? "▸ ⠀" : "⠀⠀";
      bibleLanguageSubmenu.addItem(
        last_used_pointer + bibleVersion.getTranslation().getName(),
        dynamic_name_bible_linker
      );
    }
    bibleSubMenu.addSubMenu(bibleLanguageSubmenu);
  }

  // Create menu
  menu
    .addSubMenu(bibleSubMenu)
    .addSeparator()
    .addItem("📝  Study tools", "study_tools")
    .addToUi();
}

// Dynamic menu hack
const bibleVersions = getBibleVersions();
for (let bibleVersion of bibleVersions) {
  let key = bibleVersion.getTranslation().getVersion();
  let dynamic_name_bible_linker = "bible_linker_" + key;
  this[dynamic_name_bible_linker] = function () {
    bibleLinker(key);
  };
}

function existsInBibleSearchResult(
  bibleText,
  currentBibleTextSearchResult,
  existingBibleTextSearchResult
) {
  for (let searchResult of existingBibleTextSearchResult) {
    Logger.log(
      "currentBibleTextSearchResult.getSelectionStart(): " +
        currentBibleTextSearchResult.getOffsetStart()
    );
    Logger.log(
      "searchResult.getSelectionStart(): " + searchResult.getOffsetStart()
    );
    Logger.log(
      "currentBibleTextSearchResult.getSelectionEnd(): " +
        currentBibleTextSearchResult.getOffsetEnd()
    );
    Logger.log(
      "searchResult.getSelectionEnd(): " + searchResult.getOffsetEnd()
    );
    if (
      currentBibleTextSearchResult.getOffsetStart() >=
        searchResult.getOffsetStart() &&
      currentBibleTextSearchResult.getOffsetEnd() <= searchResult.getOffsetEnd()
    ) {
      Logger.log(
        "Bible Text: " +
          bibleText +
          " is partial of recent bible search text result."
      );
      return true;
    }
  }
  Logger.log(
    "Bible Text: " +
      bibleText +
      " is not partial of recent bible search text result."
  );
  return false;
}

function getBibleSearchResult(
  result,
  search,
  existingSearchResult,
  isSingleChapter
) {
  let searchString = "(?i)" + search + " [0-9]+:[0-9 ,;:-]+";
  Logger.log("searchString :" + searchString);
  if (isSingleChapter) {
    searchString = "(?i)" + search + " [0-9 ,-]+";
  }
  var searchResult = result.getSearchElement().findText(searchString);

  while (searchResult != null) {
    let currentbibleSearchResult = new BibleSearchResult(
      searchResult,
      result.getSelectionStart(),
      result.getSelectionEnd()
    );
    existingSearchResult.push(currentbibleSearchResult);

    searchResult = result
      .getSearchElement()
      .findText(searchString, searchResult);
  }
  return existingSearchResult;
}

function bibleLinker(bible_version) {
  // Set the latest used Bible version
  if (bible_version == undefined || bible_version == null)
    bible_version = "nwt";
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty("last_used_bible_version", bible_version);

  create_menu();

  let currentBibleVersion;
  for (let bibleVersion of getBibleVersions()) {
    if (bibleVersion.getTranslation().getVersion() === bible_version) {
      currentBibleVersion = bibleVersion;
      break;
    }
  }

  var doc = DocumentApp.getActiveDocument();
  let selection = doc.getSelection();
  let documentSearchResult = new Array();

  if (selection) {
    var rangeElements = selection.getRangeElements();
    for (let n = 0; n < rangeElements.length; n++) {
      let rangeElement = rangeElements[n];
      documentSearchResult.push(
        new SearchElement(
          rangeElement.getElement(),
          rangeElement.getStartOffset(),
          rangeElement.getEndOffsetInclusive()
        )
      );
    }
  } else {
    documentSearchResult.push(new SearchElement(doc.getBody()));
  }
  var erroneousLines = new Array();
  var err_msg_title = "Oops!";
  var err_msg1 = "There was an error processing this verse:\n\n";
  var err_msg2 = "\n\nIs there a typo? (Tip: It's usually the spaces.)";
  let allExistingBibleTextSearchresult = new Array();
  for (let result of documentSearchResult) {
    for (let book of currentBibleVersion.getLanguage().getBooks()) {
      let bibleTextSearchResults = getBibleSearchResult(
        result,
        book.getName(),
        new Array(),
        book.isSingleChapter()
      );

      if (book.getAbbr1() != "") {
        bibleTextSearchResults = getBibleSearchResult(
          result,
          book.getAbbr1(),
          bibleTextSearchResults,
          book.isSingleChapter()
        );
      }

      if (book.getAbbr2() != "") {
        bibleTextSearchResults = getBibleSearchResult(
          result,
          book.getAbbr2(),
          bibleTextSearchResults,
          book.isSingleChapter()
        );
      }

      for (let bibleTextSearch of bibleTextSearchResults) {
        for (let bibleTextParseResult of parseBibleText(
          bibleTextSearch.getContent().getStartOffset(),
          bibleTextSearch.getBibleText(),
          book,
          erroneousLines
        )) {
          let selectionStart = bibleTextSearch.getSelectionStart();
          let selectionEnd = bibleTextSearch.getSelectionEnd();
          let bibleTextOffsetStart = bibleTextParseResult.getOffsetStart();
          let bibleTextOffsetEnd = bibleTextParseResult.getOffsetEnd();
          Logger.log(
            "selectionStart: " +
              selectionStart +
              ", selectionEnd: " +
              selectionEnd +
              ", bibleTextOffsetStart: " +
              bibleTextOffsetStart +
              ", bibleTextOffsetEnd: " +
              bibleTextOffsetEnd +
              ", Bible Text: " +
              bibleTextSearch.getBibleText()
          );
          if (
            shouldShowLink(
              selectionStart,
              selectionEnd,
              bibleTextOffsetStart,
              bibleTextOffsetEnd
            )
          ) {
            Logger.log(
              "Checking if " +
                bibleTextSearch.getBibleText() +
                " is partial of a bible text."
            );
            if (
              !existsInBibleSearchResult(
                bibleTextSearch.getBibleText(),
                bibleTextParseResult,
                allExistingBibleTextSearchresult
              )
            ) {
              allExistingBibleTextSearchresult.push(bibleTextParseResult);
              bibleTextSearch
                .getContent()
                .getElement()
                .setLinkUrl(
                  bibleTextOffsetStart,
                  bibleTextOffsetEnd,
                  getBibleLink(
                    bibleTextParseResult,
                    currentBibleVersion.getTranslation()
                  )
                );
            }
          }
        }
      }
    }
  }

  if (erroneousLines && erroneousLines.length > 0) {
    var ui = DocumentApp.getUi();
    ui.alert(
      err_msg_title,
      err_msg1 + erroneousLines.join("\n") + err_msg2,
      ui.ButtonSet.OK
    );
  }
}

function shouldShowLink(selectionStart, selectionEnd, offsetStart, offsetEnd) {
  if (!selectionStart && !selectionEnd) {
    return true;
  }

  if (selectionStart == -1 && selectionEnd == -1) {
    return true;
  }

  if (offsetStart >= selectionStart && offsetEnd <= selectionEnd) {
    return true;
  }

  return false;
}

function parseBibleText(
  bibleTextStartIndex,
  content,
  bibleBook,
  erroneousLines
) {
  let bibleTextParseResults = new Array();
  var bibleTexts = content.split(";");
  let isSingleChapter = bibleBook.isSingleChapter();
  let offset = 0;
  // Retain verses only, remove if it does not contain colon (:), exception on single chapter books
  for (let i = 0; i < bibleTexts.length; i++) {
    if (!isSingleChapter && !bibleTexts[i].includes(":")) {
      bibleTexts.splice(i, 1);
      i--;
    }
  }

  // Split by comma (,)
  for (let n = 0; n < bibleTexts.length; n++) {
    let bibleText = bibleTexts[n];
    if (bibleText.includes(",")) {
      bibleTexts[n] = bibleText.split(",");

      // Rejoin if verses are consecutive
      if (Array.isArray(bibleText)) {
        for (let m = 1; m < bibleText.length; m++) {
          if (
            parseInt(bibleText[m - 1].match(/[0-9]+$/), 10) + 1 ==
            parseInt(bibleText[m], 10)
          ) {
            bibleText[m - 1] += "," + bibleText[m];
            bibleText.splice(m, 1);
            m--;
          }
        }

        // Convert array to string if consecutive verses
        if (bibleText.length == 1) {
          bibleText = bibleText[0].toString();
        }
      }
    }
  }

  try {
    for (let bibleText of bibleTexts) {
      // Declare variable(s)

      let chapters = [],
        verse_start,
        verse_end;

      if (Array.isArray(bibleText)) {
        for (let m = 0; m < bibleText.length; m++) {
          // Get chapter(s)
          if (isSingleChapter) {
            chapters[0] = 1;
            chapters[1] = 1;
          } else {
            chapters = bibleText[0].match(/[0-9]+:/g);
            if (chapters.length == 1) {
              chapters[0] = chapters[0].replace(":", "");
              chapters[1] = chapters[0];
            } else {
              chapters[0] = chapters[0].replace(":", "");
              chapters[1] = chapters[1].replace(":", "");
            }
          }

          // Get verse(s)
          if (bibleText[m].includes(":")) {
            verse_start = bibleText[m]
              .match(/:[0-9]+/)
              .toString()
              .replace(":", "");
            verse_end = bibleText[m]
              .match(/[0-9]+\s*$/)
              .toString()
              .replace(":", "");
          } else {
            verse_start = bibleText[m].match(/\s[0-9]+/).toString();
            verse_end = bibleText[m].match(/[0-9]+\s*$/).toString();
          }
          let verseLength = bibleText[m].trim().length;
          let start = bibleTextStartIndex + offset;
          let end = start + verseLength - 1;
          Logger.log(
            "Chapter Start: " +
              chapters[0] +
              ", Chapter End: " +
              chapters[1] +
              ", Verse Start: " +
              verse_start +
              ", Verse End: " +
              verse_end
          );
          Logger.log(
            "BibleText Start Index: " +
              bibleTextStartIndex +
              ", Bible Text:" +
              bibleText[m] +
              ", Start: " +
              start +
              ", End: " +
              end +
              ", Parse Bible Text: " +
              content.slice(start, end + 1)
          );

          offset += verseLength + 2;
          bibleTextParseResults.push(
            new BibleTextParseResult(
              bibleBook,
              chapters[0],
              chapters[1],
              verse_start,
              verse_end,
              start,
              end
            )
          );
        }
      } else {
        // Get chapter(s)
        if (isSingleChapter) {
          chapters[0] = 1;
          chapters[1] = 1;
        } else {
          chapters = bibleText.match(/[0-9]+:/g);
          if (chapters.length == 1) {
            chapters[0] = chapters[0].replace(":", "");
            chapters[1] = chapters[0];
          } else {
            chapters[0] = chapters[0].replace(":", "");
            chapters[1] = chapters[1].replace(":", "");
          }
        }
        // Get verse(s)
        if (isSingleChapter) {
          verse_start = bibleText.match(/\s[0-9]+/).toString();
          verse_end = bibleText.match(/[0-9]+\s*$/).toString();
        } else {
          verse_start = bibleText
            .match(/:[0-9]+/)
            .toString()
            .replace(":", "");
          verse_end = bibleText
            .match(/[0-9]+\s*$/)
            .toString()
            .replace(":", "");
        }
        let verseLength = bibleText.trim().length;
        let start = bibleTextStartIndex + offset;
        let end = start + verseLength - 1;
        Logger.log(
          "Chapter Start: " +
            chapters[0] +
            ", Chapter End: " +
            chapters[1] +
            ", Verse Start: " +
            verse_start +
            ", Verse End: " +
            verse_end
        );

        Logger.log(
          "BibleText Start Index: " +
            bibleTextStartIndex +
            ", Bible Text:" +
            bibleText +
            ", Start: " +
            start +
            ", End: " +
            end +
            ", Parse Bible Text: " +
            content.slice(start, end + 1)
        );
        offset += verseLength + 2;
        bibleTextParseResults.push(
          new BibleTextParseResult(
            bibleBook,
            chapters[0],
            chapters[1],
            verse_start,
            verse_end,
            start,
            end
          )
        );
      }
    }
  } catch {
    erroneousLines.push(content);
  }
  return bibleTextParseResults;
}

function getBibleVersions() {
  return [
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "nwt",
        "New World Translation (NWT)",
        "https://www.jw.org/finder?wtlocale=E&pub=nwt&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "nwtsty",
        "NWT Study Bible",
        "https://www.jw.org/finder?wtlocale=E&pub=nwtsty&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "wol_nwt",
        "New World Translation (NWT) (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/nwt/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "nwtsty_wol",
        "NWT Study Bible (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "nwtrbi8",
        "NWT Reference Bible",
        "https://www.jw.org/finder?wtlocale=E&pub=Rbi8&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "nwtrbi8_wol",
        "NWT Reference Bible (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/Rbi8/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "kjv_jw",
        "King James Version of 1611",
        "https://www.jw.org/finder?wtlocale=E&pub=bi10&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "kjw_wol",
        "King James Version of 1611 (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/bi10/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "by_jw",
        "The Bible in Living English",
        "https://www.jw.org/finder?wtlocale=E&pub=by&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "by_wol",
        "The Bible in Living English (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/by/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "asv_jw",
        "American Standard Version",
        "https://www.jw.org/finder?wtlocale=E&pub=bi22&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "asv_wol",
        "American Standard Version (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/bi22/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "ebr_jw",
        "Emphasized Bible",
        "https://www.jw.org/finder?wtlocale=E&pub=rh&bible=",
        "",
        ""
      )
    ),
    new Bible(
      englishBibleBooks,
      new BibleTranslation(
        "ebr_wol",
        "Emphasized Bible (WOL)",
        "https://wol.jw.org/en/wol/b/r1/lp-e/rh/",
        "#s=",
        "&study=discover&v="
      )
    ),
    new Bible(
      tagalogBibleBooks,
      new BibleTranslation(
        "nwt_tl",
        "Bagong Sanlibutang Salin ng Banal na Kasulatan (Edisyon sa Pag-aaral)",
        "https://www.jw.org/finder?wtlocale=TG&pub=nwtsty&bible=",
        "",
        ""
      )
    ),
    new Bible(
      tagalogBibleBooks,
      new BibleTranslation(
        "nwt_tl19",
        "Bagong Sanlibutang Salin (2019 na Rebisyon)",
        "https://www.jw.org/finder?wtlocale=TG&pub=nwt&bible=",
        "",
        ""
      )
    ),
    new Bible(
      spanishBibleBooks,
      new BibleTranslation(
        "nwt_s",
        "La Biblia. Traducción del Nuevo Mundo (edición de estudio)",
        "https://www.jw.org/finder?wtlocale=S&pub=nwtsty&bible=",
        "",
        ""
      )
    ),
  ];
}

function study_tools() {
  var html_content = `
        <style>
          html {font-family: "Open Sans", Arial, sans-serif;}
      
          li {padding: 0 0 20px 0;}
      
          .button {
            background-color: #326B8C;
            border: 2px solid #326B8C;
            border-radius: 8px;
            font-weight: bold;
            color: #FFF;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 30px auto 10px auto;
            padding: 12px 24px;
            display:block;
            transition-duration: 0.4s;
            cursor: pointer;
          }
      
          .button:hover {
            box-shadow: 0 6px 16px 0 rgba(0,0,0,0.24), 0 9px 50px 0 rgba(0,0,0,0.19);
          }
      
          .button:active {
            box-shadow: 0 2px 50px 0 rgba(0,0,0,0.24), 0 5px 10px 0 rgba(0,0,0,0.19);
            transform: translateY(4px);
          }
        </style>
        
        <base target="_blank">
      
        <p>Tools to help you get a deeper understanding of the Bible:</p>
      
        <ul>
          <li><strong><a href="https://wol.jw.org/">Watchtower Online Library</a> (WOL)</strong> - A research tool to find explanatory articles about Bible verses and topics.</li>
          <li><strong><a href="https://www.jw.org/finder?docid=802013025">JW Library</a></strong> - Bible library in your pocket.</li>
          <li><strong><a href="https://www.jw.org/finder?docid=1011539">Study tools</a></strong> on <a href="https://www.jw.org/">jw.org</a>.</li>
        </ul>
      
        <input class="button" type="button" value="Got it!" onClick="google.script.host.close()" />
        `;

  var htmlOutput = HtmlService.createHtmlOutput(html_content);
  DocumentApp.getUi().showModalDialog(htmlOutput, "Bible study tools");
}
