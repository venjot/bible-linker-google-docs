// Optional for easier use.
var QUnit = QUnitGS2.QUnit;

// HTML get function
function doGet() {
  QUnitGS2.init();

  QUnit.module("Basic tests");
  let bibleVersion = new BibleTranslation(
    "nwt",
    "New World Translation (NWT)",
    "https://www.jw.org/finder?wtlocale=E&pub=nwt&bible=",
    "",
    ""
  );
  QUnit.test("Parse Bible Verses with dash", function (assert) {
    assert.equal(
      QUnit.equiv(
        parseBibleVerses(bibleVersion, 1, "Genesis 3:15-19", false)[0],
        new ParseBibleVersesSearchResult(
          bibleVersion,
          1,
          "3",
          "3",
          "15",
          "19",
          "Genesis 3:15-19"
        )
      ),
      true
    );
  });

  QUnit.test("Parse Bible Verses with comma", function (assert) {
    assert.equal(
      QUnit.equiv(
        parseBibleVerses(bibleVersion, 1, "Genesis 3:15,16,17", false)[0],
        new ParseBibleVersesSearchResult(
          bibleVersion,
          1,
          "3",
          "3",
          "15",
          "17",
          "Genesis 3:15,16,17"
        )
      ),
      true
    );
  });

  QUnit.start();
  return QUnitGS2.getHtml();
}

// Retrieve test results when ready.
function getResultsFromServer() {
  return QUnitGS2.getResultsFromServer();
}
