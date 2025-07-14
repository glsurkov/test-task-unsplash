## Storybook:

**Запуск сторибука:**

`yarn run storybook`

**Правило обновления сторибука:**

1. При добавлении нового компонента или изменения существующего
   в `@/shared/ui` необходимо создавать/обновлять стори
2. Если не очевидно что означает пропс, необходимо добавлять описание. Если очевидно что означает пропс - добавлять описание не надо.
   Описание автоматически появится в storybook.

<span style="color: #4170CE">Например добавлено описание для пропса `treeToggleBy`: </span>
![storybook-props-example.png](images/storybook-props-example.png) 3. Если не очевидно зачем нужен компонент, можно добавить описание.

<span style="color: #4170CE">Например описание для компонента `Group`: </span>
![storybook-component-name-example.png](images/storybook-component-name-example.png) 4. Если внутри компонента используется redux store или другие side компоненты, нужно использовать или добавлять новые helpers (в основном decorators) в `@/shared/storybook` 5. Все новые иконки нужно добавлять в `@/shared/assets/Iconography.mdx` 6. Если компонент имеет несколько сложных состояний, нужно описывать их в отдельных Story чтобы разработчикам было понят.

<span style="color: #4170CE">Например для компонента DiagramContainer было описано 2 стори: С таблицей и с bar charts. </span>
