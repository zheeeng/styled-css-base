export const demoSet = {
    Main: (child: JSX.Element) => (
        <main>
            {child}
        </main>
    ),
    Section: (child: JSX.Element) => (
        <section>
            {child}
        </section>
    ),
    Pre: (code: string) => (
        <pre>{code}</pre>
    ),
    Select: () => (
        <label>
            Select
            <select>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
            </select>
        </label>
    ),
    Radio: () => (
        <label>
            Radio
            <input type="radio" />
        </label>
    ),
    CheckBox: () => (
        <label>
            CheckBox
            <input type="checkbox" />
        </label>
    ),
    Text: () => (
        <label>
            Text
            <input type="text" />
        </label>
    ),
    Number: () => (
        <label>
            Number
            <input type="number" />
        </label>
    ),
    Table: () => (
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Subject</th>
                <th>Publication Year</th>
            </tr>
            <tr>
                <td>万历十五年</td>
                <td>黃仁宇</td>
                <td>History</td>
                <td>1981</td>
            </tr>
            <tr>
                <td>{'L\'Ancien Régime et la Révolution'}</td>
                <td>Alexis de Tocqueville</td>
                <td>History</td>
                <td>1866</td>
            </tr>
            <tr>
                <td>A Brief History of Time</td>
                <td>Stephen Hawking</td>
                <td>Cosmology</td>
                <td>1988</td>
            </tr>
            <tr>
                <td>失楽園</td>
                <td>渡辺淳一</td>
                <td>Novel</td>
                <td>1995</td>
            </tr>
        </table>
    ),
    Ul: () => (
        <ul>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
        </ul>
    ),
    Ol: () => (
        <ol>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
        </ol>
    ),
    Dl: () => (
        <dl>
            <dt>HTML</dt>
            <dd>is the skeleton of the webpage.</dd>

            <dt>CSS</dt>
            <dd>is the skin of the webpage.</dd>

            <dt>JavaScript</dt>
            <dd>is the muscle of the webpage.</dd>
        </dl>
    ),
    Hr: () => (
        <hr />
    )
}

export const createDemoSet = ({ preCode }: { preCode: string }) => (
    demoSet.Main(
        <>
            {demoSet.Section(demoSet.Pre(preCode))}
            {demoSet.Section(demoSet.Select())}
            {demoSet.Section(demoSet.Radio())}
            {demoSet.Section(demoSet.CheckBox())}
            {demoSet.Section(demoSet.Text())}
            {demoSet.Section(demoSet.Number())}
            {demoSet.Section(demoSet.Table())}
            {demoSet.Section(demoSet.Ul())}
            {demoSet.Section(demoSet.Ol())}
            {demoSet.Section(demoSet.Dl())}
            {demoSet.Section(demoSet.Hr())}
        </>
    )
)