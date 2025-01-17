# Function: parseTargetString

▸ **parseTargetString**(`targetString`): [`Target`](../../devkit/documents/Target)

@deprecated(v17) A project graph should be passed to parseTargetString for best accuracy.

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `targetString` | `string` |

#### Returns

[`Target`](../../devkit/documents/Target)

▸ **parseTargetString**(`targetString`, `projectGraph`): [`Target`](../../devkit/documents/Target)

Parses a target string into {project, target, configuration}

Examples:

```typescript
parseTargetString('proj:test', graph); // returns { project: "proj", target: "test" }
parseTargetString('proj:test:production', graph); // returns { project: "proj", target: "test", configuration: "production" }
```

#### Parameters

| Name           | Type                                                  | Description      |
| :------------- | :---------------------------------------------------- | :--------------- |
| `targetString` | `string`                                              | target reference |
| `projectGraph` | [`ProjectGraph`](../../devkit/documents/ProjectGraph) | -                |

#### Returns

[`Target`](../../devkit/documents/Target)
