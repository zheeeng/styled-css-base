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
            {demoSet.Section(demoSet.Text())}
            {demoSet.Section(demoSet.Number())}
            {demoSet.Section(demoSet.Hr())}
        </>
    )
)