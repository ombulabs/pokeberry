const fs = require('fs');
const path = require('path');

module.exports = {
  params: ({ args }) => {
    if (typeof args.name !== 'string') {
      throw new Error(`
      ===========================
      A package name is required.
      ===========================
      `);
    }
    if (args.name.toLowerCase() !== args.name) {
      throw new Error(`
      ===========================================
      Component package names must be kebab-case.
      ===========================================
      `);
    }
    if (fs.existsSync(path.resolve(`packages/${args.name}`))) {
      throw new Error(`
      ==========================================
      A component with this name already exists.
      ==========================================
      `);
    }
  },
};
