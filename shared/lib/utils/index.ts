export const cn = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("ru-RU").format(date);


