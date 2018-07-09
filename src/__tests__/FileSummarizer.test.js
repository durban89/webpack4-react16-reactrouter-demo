const fs = require('fs');
const FileSummarizer = require('../lib/FileSummarizer');


jest.mock('fs');

describe('listFilesInDirectorySync', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    fs.__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes all files in the directory in the summary', () => {
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync('/path/to');

    expect(fileSummary.length).toBe(2);
  });
});
