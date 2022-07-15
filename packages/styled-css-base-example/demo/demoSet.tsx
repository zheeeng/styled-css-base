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
    Article: () => (
        <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </article>
    ),
    H1: () => (
        <h1>head 1</h1>
    ),
    H2: () => (
        <h2>head 2</h2>
    ),
    H3: () => (
        <h3>head 3</h3>
    ),
    H4: () => (
        <h4>head 4</h4>
    ),
    H5: () => (
        <h5>head 5</h5>
    ),
    H6: () => (
        <h6>head 6</h6>
    ),
    P: () => (
        <p>paragraph</p>
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
    Range: () => (
        <label>
            Range
            <input type="range" />
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
    Password: () => (
        <label>
            Password
            <input type="password" />
        </label>
    ),
    Date: () => (
        <label>
            Date
            <input type="date" />
        </label>
    ),
    Textarea: () => (
        <label>
            <textarea />
        </label>
    ),
    Color: () => (
        <label>
            Color
            <input type="color" />
        </label>
    ),
    File: () => (
        <label>
            File
            <input type="file" />
        </label>
    ),
    Table: () => (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Subject</th>
                    <th>Publication Year</th>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
    ),
    TableVertical: () => (
        <table>
            <thead>
                <tr>
                    <th>Continent</th>
                    <th>Population(2020)</th>
                    <th>Area(Km²)</th>
                    <th>Density(P/Km²)</th>
                    <th>World Population Share</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Asia</th>
                    <td>3,261,050,390</td>
                    <td>31,033,131</td>
                    <td>105</td>
                    <td>41.84%</td>
                </tr>
                <tr>
                    <th>Africa</th>
                    <td>1,340,598,147</td>
                    <td>29,648,481</td>
                    <td>45</td>
                    <td>17.20%</td>
                </tr>
                <tr>
                    <th>Europe</th>
                    <td>747,636,026</td>
                    <td>22,134,900	</td>
                    <td>34</td>
                    <td>9.59%</td>
                </tr>
                <tr>
                    <th>North America</th>
                    <td>592,072,212</td>
                    <td>21,330,000</td>
                    <td>28</td>
                    <td>7.60%</td>
                </tr>
                <tr>
                    <th>South America</th>
                    <td>430,759,766</td>
                    <td>17,461,112</td>
                    <td>25</td>
                    <td>5.53%</td>
                </tr>
                <tr>
                    <th>Australia/Oceania</th>
                    <td>43,111,704</td>
                    <td>8,486,460</td>
                    <td>5</td>
                    <td>0.55%</td>
                </tr>
                <tr>
                    <th>Antarctica</th>
                    <td>0</td>
                    <td>13,720,000</td>
                    <td>0</td>
                    <td>0.00%</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>Reference: <a href="https://www.worldometers.info/geography/7-continents/">here</a></td>
                </tr>
            </tfoot>
        </table>
    ),
    Details: () => (
        <details>
            <summary>
                Summary
            </summary>

            Details
        </details>
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
    Button: () => (
        <button>button</button>
    ),
    Dialog: () => (
        <div>
            <button onClick={() => {
                // @ts-expect-error: assert dialog reference is not null
                (window.dialog as HTMLDialogElement).showModal()
            }}>Open Dialog</button>
            <dialog id="dialog">
                <header>Dialog modal</header>
                <p>Oh, jingle bells, jingle bells, Jingle all the way</p>
                <button onClick={() => {
                    // @ts-expect-error: assert dialog reference is not null
                    (window.dialog as HTMLDialogElement).close()
                }}>Close Dialog</button>
            </dialog>
        </div>
    ),
    Img: () => (
        <img src="https://source.unsplash.com/random" />
    ),
    Iframe: () => (
        <iframe src="https://rainfor.me/" />
    ),
    Hr: () => (
        <hr />
    )
}

export const createDemoSet = ({ preCode }: { preCode: string }) => (
    demoSet.Main(
        <>
            {demoSet.Section(demoSet.Pre(preCode))}
            {demoSet.Section(demoSet.Article())}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.H1())}
                    {demoSet.Section(demoSet.H2())}
                    {demoSet.Section(demoSet.H3())}
                    {demoSet.Section(demoSet.H4())}
                    {demoSet.Section(demoSet.H5())}
                    {demoSet.Section(demoSet.H6())}
                    {demoSet.Section(demoSet.P())}
                </>
            )}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Select())}
                    {demoSet.Section(demoSet.Radio())}
                    {demoSet.Section(demoSet.CheckBox())}
                    {demoSet.Section(demoSet.Range())}
                </>
            )}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Text())}
                    {demoSet.Section(demoSet.Number())}
                </>
            )}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Password())}
                    {demoSet.Section(demoSet.Date())}
                </>
            )}
            {demoSet.Section(demoSet.Textarea())}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Color())}
                    {demoSet.Section(demoSet.File())}
                </>
            )}
            {demoSet.Section(demoSet.Table())}
            {demoSet.Section(demoSet.TableVertical())}
            {demoSet.Section(demoSet.Details())}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Ul())}
                    {demoSet.Section(demoSet.Ol())}
                </>
            )}
            {demoSet.Section(demoSet.Dl())}
            {demoSet.Section(
                <>
                    {demoSet.Section(demoSet.Button())}
                    {demoSet.Section(demoSet.Dialog())}
                </>
            )}
            {demoSet.Section(demoSet.Img())}
            {demoSet.Section(demoSet.Iframe())}
            {demoSet.Section(demoSet.Hr())}
        </>
    )
)