const javaTypeMap: { [key: string]: string } = {
  // 数字
  byte: 'number',
  integer: 'number',
  int: 'number',
  long: 'number',
  double: 'number',
  float: 'number',
  short: 'number',
  bigdecimal: 'number',
  biginteger: 'number',
  // 字符串
  character: 'string',
  char: 'string',
  string: 'string',
  // 布尔
  boolean: 'boolean',
  void: 'void',
};

// 从 jsonSchema 中解析所有接口及模型
export function getSchemaData(oneApiSchema: any[]): { apiList: any[]; modelList: any[] } {
  const apiList: any[] = [];
  const modelList: any[] = [];

  oneApiSchema.forEach((schema: any, index: number) => {
    const { classPath, fileType, className } = schema;
    let clsName = className;

    if (fileType === 'ENTRY') {
      apiList.push({
        title: clsName,
        desc: schema.description?.description,
        classPath,
      });
    }

    if (fileType === 'RESOURCE') {
      modelList.push({
        title: clsName,
        desc: schema.description?.description,
        classPath,
      });
    }
  });

  return { apiList, modelList };
}

// 获取具体的引用类型
export function getTypeReference(type: any, oneApiSchema: any[]) {
  let nodes: { link: null | string; text: string }[] = [];
  const { name, classPath, items } = type;
  const targetModel = oneApiSchema.find((schema) => schema.classPath === classPath);

  if (targetModel) {
    const { className, classPath } = targetModel;
    nodes.push({
      link: classPath,
      text: className,
    });
  } else {
    nodes.push({
      link: null,
      text: name === 'List' ? 'Array' : javaTypeMap[name.toLowerCase()] || name,
    });
  }

  if (items) {
    const childNodes = items?.map((item: any) => getTypeReference(item, oneApiSchema));
    nodes = nodes.concat(childNodes).flat();
  }

  return nodes;
}
