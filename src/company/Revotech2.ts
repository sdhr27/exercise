// create path
// delete path
// setValue path value
// getValue path
// kunchen@revo-tech.com
type FileType = {
  value: string | null;
  name: string; // app1 aap2
  level: number;
  father: { name: string; level: number }[];
}[];

export class FileSys {
  files: FileType = [];

  create(path: string) {
    const pathArr = path.split('/');
    pathArr.forEach((path, index) => {
      const target = this.files.find(
        (file) => file.level === index && file.name === path,
      );
      if (target) {
        // 查有路径
      } else {
        this.files.push({
          value: null,
          name: path,
          level: index,
          father: pathArr
            .filter((_, idx) => idx < index)
            .map((item, idx) => ({ name: item, level: idx })),
        });
      }
    });
  }
  delete(path: string) {
    const pathArr = path.split('/');
    const deleteIdx = pathArr.length - 1;
    const deletePathName = pathArr[deleteIdx];
    // console.log(pathArr, this.files);
    const newFiles = this.files
      .filter((item) => {
        return !(
          deletePathName === item.name ||
          (item.level >= deleteIdx &&
            item.father.find((fa) => fa.name === deletePathName))
        );
      })
      .map((item) => {
        if (item.father) {
          return {
            ...item,
            father: item.father.filter((it) => !(deletePathName === it.name)),
          };
        }
        return item;
      });
    this.files = newFiles;
  }
  getValue(path) {
    const pathArr = path.split('/');
    const getIdx = pathArr.length - 1;
    const getPathName = pathArr[getIdx];
    return this.files.find(
      (item) => item.name === getPathName && item.level == getIdx,
    )?.value;
  }
  setValue(path, value) {
    const pathArr = path.split('/');
    const setIdx = pathArr.length - 1;
    const setPathName = pathArr[setIdx];
    this.files = this.files.map((item) => {
      if (item.name === setPathName && item.level === setIdx) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });
  }
}
