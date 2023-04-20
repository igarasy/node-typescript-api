import * as path from 'path';
import moduleAlias from 'module-alias';

//this will catch the actual directory, go back 2 folders and import all files
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
