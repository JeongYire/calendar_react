const WEEK: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];

type DayOfWeekBlockProps = {
    children: React.ReactNode;
};

const DayOfWeekBlockContainer = ({ children }: DayOfWeekBlockProps) => {
    return <div id="dayOfWeekBlock">{children}</div>;
};

const DayOfWeekBlockItem = ({ name }: { name: string }) => {
    return (
        <div>
            <span>{name}</span>
        </div>
    );
};

const DayOfWeekBlock = () => {
    return (
        <DayOfWeekBlockContainer>
            {WEEK.map((name) => (
                <DayOfWeekBlockItem name={name} />
            ))}
        </DayOfWeekBlockContainer>
    );
};

export default DayOfWeekBlock;
