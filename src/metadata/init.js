/* eslint-disable */
export function meta_init($p) {

$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_log_view` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `key` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `ireg_log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `doc_issue` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `identifier` CHAR, `caption` CHAR, `definition` CHAR, `initiator` CHAR, `mark` INT, `executor` CHAR, `quickly` INT, `important` INT, `executor_accepted` BOOLEAN, `specify` BOOLEAN, `canceled` BOOLEAN, `completed` BOOLEAN, `initiator_accepted` BOOLEAN, `state_date` Date, `ts_tags` JSON, `ts_notes` JSON, `ts_history` JSON, `ts_flows` JSON); CREATE TABLE IF NOT EXISTS `doc_activity` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `activity` CHAR, `value` FLOAT); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `sorting_field` INT, `async` BOOLEAN, `disabled` BOOLEAN, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_tags` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `category` CHAR, `synonym` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_articles` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `h1` CHAR, `descr` CHAR, `introduction` CHAR, `content` CHAR, `img` CHAR, `date` Date, `author` CHAR, `sorting_field` INT, `published` BOOLEAN, `contents` CHAR, `version_from` CHAR, `version_till` CHAR, `formula` CHAR, `predefined_name` CHAR, `ts_tags` JSON, `ts_acl` JSON, `ts_aliases` JSON, `ts_acl_att` JSON); CREATE TABLE IF NOT EXISTS `cat_flows` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `id` CHAR, `prefix` CHAR, `branch` CHAR, `push_only` BOOLEAN, `subscription` BOOLEAN, `suffix` CHAR, `direct` BOOLEAN, `sex` CHAR, `email_addr` CHAR, `predefined_name` CHAR, `ts_extra_fields` JSON, `ts_acl_objs` JSON); CREATE TABLE IF NOT EXISTS `cat_contents` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `sorting_field` INT, `published` BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_aliases` JSON); CREATE TABLE IF NOT EXISTS `cat_flow_tunes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `start_date` Date, `predefined_name` CHAR, `ts_flows` JSON); CREATE TABLE IF NOT EXISTS `cat_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `used` BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_extra_properties` JSON); CREATE TABLE IF NOT EXISTS `cat_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `note` CHAR, `inn` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_parameters_keys` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `priority` INT, `note` CHAR, `sorting_field` INT, `applying` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_tags_category` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `full_moniker` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `full_name` CHAR, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_activity` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `flow` CHAR, `health` FLOAT, `work` FLOAT, `family` FLOAT, `humanity` FLOAT, `personal` FLOAT, `use` BOOLEAN, `sorting_field` INT, `plan` FLOAT, `period` CHAR, `by_default` FLOAT, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_scheme_settings` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `obj` CHAR, `user` CHAR, `order` INT, `query` CHAR, `date_from` Date, `date_till` Date, `standard_period` CHAR, `formula` CHAR, `output` CHAR, `tag` CHAR, `ts_fields` JSON, `ts_sorting` JSON, `ts_dimensions` JSON, `ts_resources` JSON, `ts_selection` JSON, `ts_params` JSON, `ts_composition` JSON, `ts_conditional_appearance` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_fields` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_meta_objs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `type` CHAR, `ts_elmnts` JSON); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `shown` BOOLEAN, `sorting_field` INT, `extra_values_owner` CHAR, `available` BOOLEAN, `mandatory` BOOLEAN, `include_to_name` BOOLEAN, `list` INT, `note` CHAR, `destination` CHAR, `tooltip` CHAR, `caption` CHAR, `is_extra_property` BOOLEAN, `include_to_description` BOOLEAN, `predefined_name` CHAR, `type` JSON); CREATE TABLE IF NOT EXISTS `enm_task_events` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_gender` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_periodicity` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_couchdb_roles` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_report_output` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_quick_access` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_standard_period` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_data_field_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_label_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_comparison_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sort_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); ', []);

$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"}],"sort_directions":[{"order":0,"name":"asc","synonym":"По возрастанию","default":true},{"order":1,"name":"desc","synonym":"По убыванию"}],"comparison_types":[{"order":0,"name":"gt","synonym":"Больше"},{"order":1,"name":"gte","synonym":"Больше или равно"},{"order":2,"name":"lt","synonym":"Меньше"},{"order":3,"name":"lte","synonym":"Меньше или равно "},{"order":4,"name":"eq","synonym":"Равно","default":true},{"order":5,"name":"ne","synonym":"Не равно"},{"order":6,"name":"in","synonym":"В списке"},{"order":7,"name":"nin","synonym":"Не в списке"},{"order":8,"name":"lke","synonym":"Содержит "},{"order":9,"name":"nlk","synonym":"Не содержит"},{"order":10,"name":"filled","synonym":"Заполнено "},{"order":11,"name":"nfilled","synonym":"Не заполнено"}],"label_positions":[{"order":0,"name":"inherit","synonym":"Наследовать","default":true},{"order":1,"name":"hide","synonym":"Скрыть"},{"order":2,"name":"left","synonym":"Лево"},{"order":3,"name":"right","synonym":"Право"},{"order":4,"name":"top","synonym":"Верх"},{"order":5,"name":"bottom","synonym":"Низ"}],"data_field_kinds":[{"order":0,"name":"field","synonym":"Поле ввода","default":true},{"order":1,"name":"input","synonym":"Простой текст"},{"order":2,"name":"text","synonym":"Многострочный текст"},{"order":3,"name":"label","synonym":"Надпись"},{"order":4,"name":"link","synonym":"Гиперссылка"},{"order":5,"name":"cascader","synonym":"Каскадер"},{"order":6,"name":"toggle","synonym":"Переключатель"},{"order":7,"name":"image","synonym":"Картинка"},{"order":8,"name":"type","synonym":"Тип значения"},{"order":9,"name":"path","synonym":"Путь к данным"},{"order":10,"name":"typed_field","synonym":"Поле связи по типу"},{"order":11,"name":"props","synonym":"Свойства объекта"},{"order":12,"name":"star","synonym":"Пометка"}],"standard_period":[{"order":0,"name":"custom","synonym":"Произвольный","default":true},{"order":1,"name":"yesterday","synonym":"Вчера"},{"order":2,"name":"today","synonym":"Сегодня"},{"order":3,"name":"tomorrow","synonym":"Завтра"},{"order":4,"name":"last7days","synonym":"Последние 7 дней"},{"order":5,"name":"last30days","synonym":"Последние 30 дней"},{"order":6,"name":"last3Month","synonym":"Последние 3 месяца"},{"order":7,"name":"lastWeek","synonym":"Прошлая неделя"},{"order":8,"name":"lastTendays","synonym":"Прошлая декада"},{"order":9,"name":"lastMonth","synonym":"Прошлый месяц"},{"order":10,"name":"lastQuarter","synonym":"Прошлый квартал"},{"order":11,"name":"lastHalfYear","synonym":"Прошлое полугодие"},{"order":12,"name":"lastYear","synonym":"Прошлый год"},{"order":13,"name":"next7Days","synonym":"Следующие 7 дней"},{"order":14,"name":"nextTendays","synonym":"Следующая декада"},{"order":15,"name":"nextWeek","synonym":"Следующая неделя"},{"order":16,"name":"nextMonth","synonym":"Следующий месяц"},{"order":17,"name":"nextQuarter","synonym":"Следующий квартал"},{"order":18,"name":"nextHalfYear","synonym":"Следующее полугодие"},{"order":19,"name":"nextYear","synonym":"Следующий год"},{"order":20,"name":"tillEndOfThisYear","synonym":"До конца этого года"},{"order":21,"name":"tillEndOfThisQuarter","synonym":"До конца этого квартала"},{"order":22,"name":"tillEndOfThisMonth","synonym":"До конца этого месяца"},{"order":23,"name":"tillEndOfThisHalfYear","synonym":"До конца этого полугодия"},{"order":24,"name":"tillEndOfThistendays","synonym":"До конца этой декады"},{"order":25,"name":"tillEndOfThisweek","synonym":"До конца этой недели"},{"order":26,"name":"fromBeginningOfThisYear","synonym":"С начала этого года"},{"order":27,"name":"fromBeginningOfThisQuarter","synonym":"С начала этого квартала"},{"order":28,"name":"fromBeginningOfThisMonth","synonym":"С начала этого месяца"},{"order":29,"name":"fromBeginningOfThisHalfYear","synonym":"С начала этого полугодия"},{"order":30,"name":"fromBeginningOfThisTendays","synonym":"С начала этой декады"},{"order":31,"name":"fromBeginningOfThisWeek","synonym":"С начала этой недели"},{"order":32,"name":"thisTenDays","synonym":"Эта декада"},{"order":33,"name":"thisWeek","synonym":"Эта неделя"},{"order":34,"name":"thisHalfYear","synonym":"Это полугодие"},{"order":35,"name":"thisYear","synonym":"Этот год"},{"order":36,"name":"thisQuarter","synonym":"Этот квартал"},{"order":37,"name":"thisMonth","synonym":"Этот месяц"}],"quick_access":[{"order":0,"name":"none","synonym":"Нет","default":true},{"order":1,"name":"toolbar","synonym":"Панель инструментов"},{"order":2,"name":"drawer","synonym":"Панель формы"}],"report_output":[{"order":0,"name":"grid","synonym":"Таблица","default":true},{"order":1,"name":"chart","synonym":"Диаграмма"},{"order":2,"name":"pivot","synonym":"Cводная таблица"},{"order":3,"name":"html","synonym":"Документ HTML"}],"couchdb_roles":[{"order":0,"name":"ram_reader","synonym":"ram_reader"},{"order":1,"name":"ram_editor","synonym":"ram_editor"},{"order":2,"name":"doc_reader","synonym":"doc_reader"},{"order":3,"name":"doc_editor","synonym":"doc_editor"},{"order":4,"name":"doc_full","synonym":"doc_full"},{"order":5,"name":"remote_reader","synonym":"remote_reader"},{"order":6,"name":"remote_editor","synonym":"remote_editor"},{"order":7,"name":"remote_full","synonym":"remote_full"}],"periodicity":[{"order":0,"name":"day","synonym":"День"},{"order":1,"name":"week","synonym":"Неделя"},{"order":2,"name":"month","synonym":"Месяц"}],"gender":[{"order":0,"name":"Мужской","synonym":"Мужской"},{"order":1,"name":"Женский","synonym":"Женский"}],"task_events":[{"order":0,"name":"mark","synonym":"Изменены баллы"},{"order":1,"name":"executor","synonym":"Изменён исполнитель"},{"order":2,"name":"quickly","synonym":"Изменена срочность"},{"order":3,"name":"important","synonym":"Изменена важность"},{"order":4,"name":"executor_accepted","synonym":"Принято исполнителем"},{"order":5,"name":"initiator_accepted","synonym":"Принято инициатором"},{"order":6,"name":"canceled","synonym":"Изменено отменено"},{"order":7,"name":"completed","synonym":"Изменено выполнено"},{"order":8,"name":"specify","synonym":"Отправлено на доработку"}]},"ireg":{"log":{"name":"log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, в сеансе которого произошло событие","type":{"types":["string"],"str_len":100}}}},"log_view":{"name":"log_view","note":"","synonym":"Просмотр журнала событий","dimensions":{"key":{"synonym":"Ключ","tooltip":"Ключ события","type":{"types":["string"],"str_len":100}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, отметивыший событие, как просмотренное","type":{"types":["string"],"str_len":100}}}}},"cat":{"meta_objs":{"fields":{}},"meta_fields":{"fields":{}},"scheme_settings":{"name":"scheme_settings","synonym":"Настройки отчетов и списков","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"obj":{"synonym":"Объект","tooltip":"Имя класса метаданных","type":{"types":["string"],"str_len":250}},"user":{"synonym":"Пользователь","tooltip":"Если пусто - публичная настройка","type":{"types":["string"],"str_len":50}},"order":{"synonym":"Порядок","tooltip":"Порядок варианта","type":{"types":["number"],"digits":6,"fraction_figits":0}},"query":{"synonym":"Запрос","tooltip":"Индекс CouchDB или текст SQL","type":{"types":["string"],"str_len":0}},"date_from":{"synonym":"Начало периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"date_till":{"synonym":"Конец периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"standard_period":{"synonym":"Стандартный период","tooltip":"Использование стандартного периода","type":{"types":["enm.standard_period"],"is_ref":true}},"formula":{"synonym":"Формула","tooltip":"Формула инициализации","type":{"types":["cat.formulas"],"is_ref":true}},"output":{"synonym":"Вывод","tooltip":"Вывод результата","type":{"types":["enm.report_output"],"is_ref":true}},"tag":{"synonym":"Дополнительные свойства","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"fields":{"name":"fields","synonym":"Доступные поля","tooltip":"Состав, порядок и ширина колонок","fields":{"parent":{"synonym":"Родитель","tooltip":"Для плоского списка, родитель пустой","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"width":{"synonym":"Ширина","tooltip":"","type":{"types":["string"],"str_len":6}},"caption":{"synonym":"Заголовок","tooltip":"","type":{"types":["string"],"str_len":100}},"tooltip":{"synonym":"Подсказка","tooltip":"","type":{"types":["string"],"str_len":100}},"ctrl_type":{"synonym":"Тип","tooltip":"Тип элемента управления","type":{"types":["enm.data_field_kinds"],"is_ref":true}},"formatter":{"synonym":"Формат","tooltip":"Функция форматирования","type":{"types":["cat.formulas"],"is_ref":true}},"editor":{"synonym":"Редактор","tooltip":"Компонент редактирования","type":{"types":["cat.formulas"],"is_ref":true}}}},"sorting":{"name":"sorting","synonym":"Поля сортировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"direction":{"synonym":"Направление","tooltip":"","type":{"types":["enm.sort_directions"],"is_ref":true}}}},"dimensions":{"name":"dimensions","synonym":"Поля группировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}}}},"resources":{"name":"resources","synonym":"Ресурсы","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"formula":{"synonym":"Формула","tooltip":"По умолчанию - сумма","type":{"types":["cat.formulas"],"is_ref":true}}}},"selection":{"name":"selection","synonym":"Отбор","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"left_value":{"synonym":"Левое значение","tooltip":"Путь к данным","type":{"types":["string"],"str_len":255}},"left_value_type":{"synonym":"Тип слева","tooltip":"Тип значения слева","default":"path","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"","type":{"types":["string"],"str_len":100}},"right_value_type":{"synonym":"Тип справа","tooltip":"Тип значения справа","default":"path","type":{"types":["string"],"str_len":100}}}},"params":{"name":"params","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","tooltip":"","type":{"types":["string"],"str_len":100}},"value_type":{"synonym":"Тип","tooltip":"Тип значения","type":{"types":["string"],"str_len":100}},"value":{"synonym":"Значение","tooltip":"Может иметь примитивный или ссылочный тип или массив","type":{"types":["string","number"],"str_len":0,"digits":15,"fraction_figits":3,"date_part":"date"}},"quick_access":{"synonym":"Быстрый доступ","tooltip":"Размещать на нанели инструментов","type":{"types":["boolean"]}}}},"composition":{"name":"composition","synonym":"Структура","tooltip":"","fields":{"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Элемент","tooltip":"Элемент структуры отчета","type":{"types":["string"],"str_len":50}},"kind":{"synonym":"Вид раздела отчета","tooltip":"список, таблица, группировка строк, группировка колонок","type":{"types":["string"],"str_len":50}},"definition":{"synonym":"Описание","tooltip":"Описание раздела структуры","type":{"types":["string"],"str_len":50}}}},"conditional_appearance":{"name":"conditional_appearance","synonym":"Условное оформление","tooltip":"","fields":{}}},"cachable":"doc"},"activity":{"name":"Активность","splitted":false,"synonym":"Виды активностей","illustration":"","obj_presentation":"Вид активности","list_presentation":"Виды активностей","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"flow":{"synonym":"Основной поток","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["ab79d46b-bb52-11e8-855f-d85d4c80ec2a","ab79d46a-bb52-11e8-855f-d85d4c80ec2a","ab79d46c-bb52-11e8-855f-d85d4c80ec2a","9a221429-f237-11e8-859f-d85d4c80ec2a","9a221428-f237-11e8-859f-d85d4c80ec2a"]}],"choice_groups_elm":"elm","type":{"types":["cat.tags_category"],"is_ref":true}},"health":{"synonym":"Здоровье","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"work":{"synonym":"Работа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"family":{"synonym":"Семья","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"humanity":{"synonym":"Люди","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"personal":{"synonym":"Личное","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"use":{"synonym":"Используется","multiline_mode":false,"tooltip":"Использовать данный вид активности","type":{"types":["boolean"]}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"plan":{"synonym":"План","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.periodicity"],"is_ref":true}},"by_default":{"synonym":"Значение автоподстановки","multiline_mode":false,"tooltip":"Если не 0, подставляется автоматически при регистрации активности","type":{"types":["number"],"digits":15,"fraction_figits":2}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"doc_ram"},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":false,"synonym":"Дополнительные значения","illustration":"","obj_presentation":"Дополнительное значение","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction_figits":2}},"full_name":{"synonym":"Полное наименование","multiline_mode":true,"tooltip":"Подробное описание значения дополнительного реквизита","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа дополнительных значений свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданных","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"full_moniker":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных","type":{"types":["string"],"str_len":430}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа объектов","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"tags_category":{"name":"КатегорииТегов","splitted":false,"synonym":"Категории тегов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"parameters_keys":{"name":"КлючиПараметров","splitted":false,"synonym":"Ключи параметров","illustration":"Списки пар {Параметр:Значение} для фильтрации в подсистемах формирования спецификаций, планировании и ценообразовании\n","obj_presentation":"Ключ параметров","list_presentation":"Ключи параметров","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания","type":{"types":["number"],"digits":5,"fraction_figits":0}},"applying":{"synonym":"Применение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.parameters_keys_applying"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.parameters_keys"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["params","comparison_type"]},{"name":["selection","owner"],"path":["params","property"]},{"name":["txt_row"],"path":["params","txt_row"]}],"choice_type":{"path":["params","property"],"elm":0},"type":{"types":["cat.property_values_hierarchy","boolean","cat.property_values","string","date","number","cat.users"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"partners":{"name":"Контрагенты","splitted":false,"synonym":"Контрагенты","illustration":"Список юридических или физических лиц клиентов (поставщиков, покупателей).","obj_presentation":"Контрагент","list_presentation":"Контрагенты","input_by_string":["name","id","inn"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа контрагентов","multiline_mode":false,"tooltip":"","type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.property_values_hierarchy","boolean","cat.property_values","string","date","number","cat.users"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}}},"cachable":"doc_ram"},"destinations":{"name":"НаборыДополнительныхРеквизитовИСведений","splitted":false,"synonym":"Наборы дополнительных реквизитов и сведений","illustration":"","obj_presentation":"Набор дополнительных реквизитов и сведений","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"used":{"synonym":"Используется","multiline_mode":false,"tooltip":"Набор свойств отображается в форме списка","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа, к которой относится набор.","type":{"types":["cat.destinations"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Дополнительный реквизит","multiline_mode":false,"tooltip":"Дополнительный реквизит этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного реквизита из набора,\nчтобы можно было вернуть связь с уникальным дополнительным реквизитом.","type":{"types":["boolean"]}}}},"extra_properties":{"name":"ДополнительныеСведения","synonym":"Дополнительные сведения","tooltip":"","fields":{"property":{"synonym":"Дополнительное сведение","multiline_mode":false,"tooltip":"Дополнительное сведение этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного сведения из набора,\nчтобы можно было вернуть связь с уникальным дополнительным сведением.","type":{"types":["boolean"]}}}}},"cachable":"ram"},"flow_tunes":{"name":"НастройкиПотоков","splitted":false,"synonym":"Настройки потоков","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"start_date":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"flows":{"name":"Потоки","synonym":"Потоки","tooltip":"","fields":{"flow":{"synonym":"Поток","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.flows"],"is_ref":true}},"rating_formula":{"synonym":"Формула оценки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"priority_formula":{"synonym":"Формула приоритетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"rate":{"synonym":"Процент потока","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}},"cachable":"doc_ram"},"contents":{"name":"Оглавление","splitted":false,"synonym":"Оглавление","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":50,"fields":{"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"published":{"synonym":"Материал опубликован","multiline_mode":false,"tooltip":"Показывать на сайте","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.contents"],"is_ref":true}}},"tabular_sections":{"aliases":{"name":"aliases","synonym":"Псевдонимы url","tooltip":"","fields":{"url":{"synonym":"Псевдоним Url","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}}}}},"cachable":"ram"},"users":{"name":"Пользователи","splitted":false,"synonym":"Пользователи","illustration":"","obj_presentation":"Пользователь","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":0}},"id":{"synonym":"Логин","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":50}},"prefix":{"synonym":"Префикс нумерации документов","multiline_mode":false,"tooltip":"Префикс номеров документов текущего пользователя","mandatory":true,"type":{"types":["string"],"str_len":2}},"branch":{"synonym":"Отдел","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ИнтеграцияОтделыАбонентов"],"is_ref":true}},"push_only":{"synonym":"Только push репликация","multiline_mode":false,"tooltip":"Для пользователя установлен режим push-only (изменения мигрируют в одну сторону - от пользователя на сервер)","type":{"types":["boolean"]}},"subscription":{"synonym":"Подписан на рассылку","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"suffix":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Для разделения данных в CouchDB","mandatory":true,"type":{"types":["string"],"str_len":4}},"direct":{"synonym":"Direct","multiline_mode":false,"tooltip":"Для пользователя запрещен режим offline","type":{"types":["boolean"]}},"sex":{"synonym":"Пол","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.gender"],"is_ref":true}},"email_addr":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.property_values_hierarchy","boolean","cat.property_values","string","date","number","cat.users"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.divisions","cat.partners","cat.users","cat.meta_ids"],"is_ref":true}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}}},"cachable":"ram"},"flows":{"name":"Потоки","splitted":false,"synonym":"Потоки","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"doc_ram"},"articles":{"name":"Статьи","splitted":false,"synonym":"Статьи","illustration":"Основной объект CMS. Новости и файлы - это тоже статьи","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":50,"fields":{"h1":{"synonym":"H1","multiline_mode":false,"tooltip":"Заголовок в теле статьи","type":{"types":["string"],"str_len":255}},"descr":{"synonym":"Description","multiline_mode":false,"tooltip":"Краткое содержание для SEO","type":{"types":["string"],"str_len":255}},"introduction":{"synonym":"Introduction","multiline_mode":false,"tooltip":"Вводный текст","type":{"types":["string"],"str_len":0}},"content":{"synonym":"Content","multiline_mode":false,"tooltip":"Текст статьи","type":{"types":["string"],"str_len":0}},"img":{"synonym":"Картинка","multiline_mode":false,"tooltip":"Картинка статьи для SEO","type":{"types":["string"],"str_len":255}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["date"],"date_part":"date_time"}},"author":{"synonym":"Автор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"published":{"synonym":"Материал опубликован","multiline_mode":false,"tooltip":"Показывать на сайте","type":{"types":["boolean"]}},"contents":{"synonym":"Оглавление","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contents"],"is_ref":true}},"version_from":{"synonym":"Версия от","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"version_till":{"synonym":"Версия до","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Модификатор","choice_params":[{"name":"parent","path":"4c94da29-5643-11e6-82b8-d85d4c80ec2a"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"tags":{"name":"Теги","synonym":"Теги","tooltip":"Произвольные ярлыки","fields":{"tag":{"synonym":"Тег (категория)","multiline_mode":false,"tooltip":"","choice_params":[{"name":"category","path":["ea434199-46df-11e8-8509-d85d4c80ec2a","ea43419b-46df-11e8-8509-d85d4c80ec2a","ea43419a-46df-11e8-8509-d85d4c80ec2a"]}],"choice_groups_elm":"elm","type":{"types":["cat.tags"],"is_ref":true}}}},"acl":{"name":"acl","synonym":"Права","tooltip":"","fields":{"role":{"synonym":"role","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"w":{"synonym":"w","multiline_mode":false,"tooltip":"Резрешена запись объекта","type":{"types":["boolean"]}}}},"aliases":{"name":"aliases","synonym":"Псевдонимы url","tooltip":"","fields":{"url":{"synonym":"Псевдоним Url","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}}}},"acl_att":{"name":"acl_att","synonym":"Права вложений","tooltip":"","fields":{"name":{"synonym":"Файл","multiline_mode":false,"tooltip":"Имя файла","type":{"types":["string"],"str_len":255}},"role":{"synonym":"role","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}}}}},"cachable":"remote"},"tags":{"name":"Теги","splitted":false,"synonym":"Теги","illustration":"","obj_presentation":"Тег","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"category":{"synonym":"Категория","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["ea434199-46df-11e8-8509-d85d4c80ec2a","ea43419a-46df-11e8-8509-d85d4c80ec2a","ea43419b-46df-11e8-8509-d85d4c80ec2a","37da5de6-bb5f-11e8-855f-d85d4c80ec2a"]}],"choice_groups_elm":"elm","type":{"types":["cat.tags_category"],"is_ref":true}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"formulas":{"name":"Формулы","splitted":false,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации","obj_presentation":"Формула","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html шаблон отчета","type":{"types":["string"],"str_len":0}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"async":{"synonym":"Асинхронный режим","multiline_mode":false,"tooltip":"Создавать асинхронную функцию","type":{"types":["boolean"]}},"disabled":{"synonym":"Отключена","multiline_mode":false,"tooltip":"Имеет смысл только для печатных форм и модификаторов","type":{"types":["boolean"]}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"Разделитель (префикс) данных","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":50}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["param"],"path":["params","param"]}],"choice_type":{"path":["params","param"],"elm":0},"type":{"types":["cat.property_values_hierarchy","boolean","cat.property_values","string","date","number","cat.users"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3}}}}},"cachable":"ram"}},"dp":{"scheme_settings":{"name":"scheme_settings","synonym":"Варианты настроек","fields":{"scheme":{"synonym":"Текущая настройка","tooltip":"Текущий вариант настроек","mandatory":true,"type":{"types":["cat.scheme_settings"],"is_ref":true}}}}},"doc":{"activity":{"name":"Активность","splitted":false,"synonym":"Активность","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":[],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"activity":{"synonym":"Вид активности","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.activity"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","type":{"types":["number"],"digits":15,"fraction_figits":2}}},"tabular_sections":{},"cachable":"doc"},"issue":{"name":"Задача","splitted":false,"synonym":"Задача","illustration":"","obj_presentation":"","list_presentation":"Задачи","input_by_string":[],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"identifier":{"synonym":"Внешний идентификатор","multiline_mode":false,"tooltip":"Ссылка на внешнюю issue, например, в github","type":{"types":["string"],"str_len":1000}},"caption":{"synonym":"Заголовок","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"definition":{"synonym":"Описание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"initiator":{"synonym":"Инициатор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"mark":{"synonym":"Баллы","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"executor":{"synonym":"Исполнитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"quickly":{"synonym":"Срочно","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"important":{"synonym":"Важно","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"executor_accepted":{"synonym":"Принята в работу исполнителем","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"specify":{"synonym":"Отправлено на доработку","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"canceled":{"synonym":"Отменено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"completed":{"synonym":"Выполнено","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"initiator_accepted":{"synonym":"Принято инициатором","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"state_date":{"synonym":"Дата статуса","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}}},"tabular_sections":{"tags":{"name":"Теги","synonym":"Теги","tooltip":"Произвольные ярлыки","fields":{"tag":{"synonym":"Тег","multiline_mode":false,"tooltip":"","choice_params":[{"name":"category","path":"37da5de6-bb5f-11e8-855f-d85d4c80ec2a"}],"choice_groups_elm":"elm","type":{"types":["cat.tags"],"is_ref":true}}}},"notes":{"name":"Комментарии","synonym":"Комментарии","tooltip":"","fields":{"identifier":{"synonym":"Идентификатор строки","multiline_mode":false,"tooltip":"Позволяет сослаться на конкретное событие","type":{"types":["string"],"str_len":36,"str_fix":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"author":{"synonym":"Автор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}}},"history":{"name":"История","synonym":"История","tooltip":"Даты открытия, закрытия, редактирования","fields":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"event":{"synonym":"Событие","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.task_events"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение реквизита на момент записи","type":{"types":["number"],"digits":6,"fraction_figits":0}}}},"flows":{"name":"Потоки","synonym":"Потоки","tooltip":"","fields":{"flow":{"synonym":"Поток","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.flows"],"is_ref":true}},"rate":{"synonym":"Процент потока","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}},"cachable":"doc"}},"areg":{},"rep":{"current_tasks":{"name":"ТекущиеЗадачи","splitted":false,"synonym":"Текущие задачи","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{}},"efficiency":{"name":"Эффективность","splitted":false,"synonym":"Эффективность","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{}}},"cch":{"properties":{"name":"ДополнительныеРеквизитыИСведения","splitted":false,"synonym":"Дополнительные реквизиты и сведения","illustration":"","obj_presentation":"Дополнительный реквизит / сведение","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"shown":{"synonym":"Виден","multiline_mode":false,"tooltip":"Настройка видимости дополнительного реквизита","type":{"types":["boolean"]}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"extra_values_owner":{"synonym":"Владелец дополнительных значений","multiline_mode":false,"tooltip":"Свойство-образец, с которым у этого свойства одинаковый список дополнительных значений","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"available":{"synonym":"Доступен","multiline_mode":false,"tooltip":"Настройка доступности дополнительного реквизита","type":{"types":["boolean"]}},"mandatory":{"synonym":"Заполнять обязательно","multiline_mode":false,"tooltip":"Настройка проверки заполненности дополнительного реквизита","type":{"types":["boolean"]}},"include_to_name":{"synonym":"Включать в наименование","multiline_mode":false,"tooltip":"Добавлять значение параметра в наименование продукции","type":{"types":["boolean"]}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"Реквизит подсистемы интеграции metadata.js - реализует функциональность списка опций","type":{"types":["number"],"digits":1,"fraction_figits":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Поясняет назначение свойства","type":{"types":["string"],"str_len":0}},"destination":{"synonym":"Набор свойств","multiline_mode":false,"tooltip":"Набор свойств, которому принадлежит уникальное свойство. Если не задан, значит свойство общее.","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"tooltip":{"synonym":"Подсказка","multiline_mode":false,"tooltip":"Показывается пользователю при редактировании свойства в форме объекта","type":{"types":["string"],"str_len":0}},"caption":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Краткое представление свойства, которое\nвыводится в формах редактирования его значения","mandatory":true,"type":{"types":["string"],"str_len":75}},"is_extra_property":{"synonym":"Это дополнительное сведение","multiline_mode":false,"tooltip":"Свойство является дополнительным сведением, а не дополнительным реквизитом","type":{"types":["boolean"]}},"include_to_description":{"synonym":"Включать в описание","multiline_mode":false,"tooltip":"Добавлять имя и значение параметра в строку описания продукции","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"type":{"synonym":"","multiline_mode":false,"tooltip":"Типы значения, которое можно ввести при заполнении свойства.","mandatory":true,"type":{"types":["cat.property_values_hierarchy","boolean","cat.property_values","string","date","number","cat.users"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3}}},"tabular_sections":{},"cachable":"ram"},"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":false,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":["name","synonym"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента","mandatory":true,"type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"Разделитель (префикс) данных","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["cat.formulas","boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}}}},"cachable":"ram"}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["Автор","АдресЭП","Активность","Баллы","БизнесПроцесс","Булево","Важно","Валюта","Валюты","ВводПоСтроке","ВедущаяЗадача","ВедущаяФормула","Ведущий","ВерсияДанных","Вес","Вид","ВидДляСписка","Виден","ВидОперации","ВидСравнения","ВидСчета","ВидыКонтактнойИнформации","ВидыПолейФормы","ВключатьВНаименование","ВключатьВОписание","Владелец","ВладелецДополнительныхЗначений","Владельцы","Внутренняя","ВремяИзменения","ВремяНачала","ВремяОкончания","ВремяСобытия","Всего","ВходящееИсходящееСобытие","ВыборГруппИЭлементов","Выполнено","Город","Готовность","ГрафикиРаботников","ГрафикРаботы","ДаНет","Данные","Дата","ДатаНачала","ДатаРождения","ДатаСтатуса","ДебетКредит","Действие","Длина","ДлинаКода","ДлинаНомера","ДниНедели","ДокументУдостоверяющийЛичность","Долгота","Должность","ДолжностьРП","ДоменноеИмяСервера","ДополнительныеРеквизиты","ДополнительныеРеквизитыИСведения","ДополнительныеСведения","Доступен","ЗависимостиДополнительныхРеквизитов","Заголовок","Задача","Заказ","Закрыт","Запасы","ЗаписьЛУРВ","ЗаполнятьОбязательно","Значение","ЗначениеЗаполнения","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","ЗначенияСвойствОбъектовИерархия","Идентификатор","ИдентификаторПользователяИБ","ИдентификаторПользователяСервиса","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","Имя","ИмяПредопределенныхДанных","ИмяРП","Индекс","Инициатор","ИНН","ИнтеграцияВидыСравнений","ИнтеграцияКешСсылок","ИнтеграцияРолиCouchDB","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипВыгрузки","ИнтеграцияТипКеширования","ИнтеграцияТипСвёртки","Исполнители","Исполнитель","Используется","История","КатегорииТегов","Категория","Ключ","КлючиПараметров","Код","КодАльфа2","КодАльфа3","КодИМНС","КодПоОКПО","Количество","Комментарии","Комментарий","КонецПериода","КонечныйОстаток","КонтактнаяИнформация","Контрагент","Контрагенты","КорректировкаРегистров","Коэффициент","Кратность","КратностьВзаиморасчетов","Курс","КурсВзаиморасчетов","КурсыВалют","Марка","Масса","Менеджер","МестоРождения","МногострочныйРежим","Мощность","Набор","НаборСвойств","НаборыДополнительныхРеквизитовИСведений","Наименование","НаименованиеПолное","Направление","НаправленияСортировки","НастройкиПотоков","НачалоПериода","НачальныйОстаток","Недействителен","Номер","НомерСтроки","НомерСчета","НомерТелефона","НомерТелефонаБезКодов","Область","Объект","ОбъектДоступа","ОбъектыДоступа","Объем","ОбязательноеЗаполнение","Оглавление","Описание","Основание","ОснованиеРП","ОсновнаяВалюта","ОсновноеПредставлениеИмя","Отбор","Ответственный","Отдел","Отменено","Отправитель","ОтправленоНаДоработку","Отступы","Отчество","ОтчествоРП","Параметр","Параметры","ПараметрыВыбора","ПараметрыОтбора","Период","Периодичность","План","Планирование","Поворачивать","Подразделение","Подразделения","Подсказка","Подчиненый","Покупатель","Пол","ПолноеИмя","ПолноеНаименование","ПоложенияЗаголовка","Получатель","ПолФизическихЛиц","Пользователи","ПометкаУдаления","Порядок","Поставщик","Поток","Потоки","ПоУмолчанию","Пояснение","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Применение","ПримененияКлючейПараметров","Принудительно","ПринятоИнициатором","ПринятоИсполнителем","Приоритет","Приход","Проведен","Процент","Прочее","Разделитель","Расход","РасширенныйРежим","Регион","Реквизит","РеквизитДопУпорядочивания","Реквизиты","Родитель","Свойство","Связи","СвязиПараметровВыбора","СвязьПоТипу","Сделка","Синоним","Скидка","Скрыть","Служебный","Событие","Содержание","Соответствие","Состояние","СостояниеТранспорта","Список","СрокДействия","Срочно","Ссылка","СтандартныйПериод","Старт","Статьи","Стоимость","Страна","СтраныМира","СтраховойНомерПФР","Строка","Сумма","СуммаДокумента","Суффикс","СчетУчета","ТабличнаяЧасть","ТабличныеЧасти","Тег","Теги","ТекстоваяСтрока","ТекущиеЗадачи","Телефон","Телефоны","ТелефоныБанка","Тип","ТипСчета","ТипыКонтактнойИнформации","ТипыСобытий","ТипыСобытийЗадач","ТипыСчетов","Товары","ТочкаМаршрута","Условие","Услуги","Фамилия","ФамилияРП","ФизическиеЛица","ФизическоеЛицо","Финиш","Формула","ФормулаОценки","ФормулаПриоритетов","ФормулаУсловия","Формулы","Цена","Число","Шаблон","Шаг","Широта","Штуки","Экземпляр","Элемент","Элементы","ЭтоГруппа","ЭтоДополнительноеСведение","Эффективность","ЮрЛицо","ЮрФизЛицо"],"syns_js":["author","email_addr","activity","mark","buisness_process","boolean","important","currency","currencies","input_by_string","leading_task","leading_formula","master","data_version","heft","kind","list_view","shown","transactions_kind","comparison_type","account_kind","contact_information_kinds","data_field_kinds","include_to_name","include_to_description","owner","extra_values_owner","owners","internal","change_time","begin_time","end_time","event_time","altogether","inbound_outbound","choice_groups_elm","completed","city","readiness","workers_schedules","worker_schedule","yes_no","data","date","start_date","birth_date","state_date","debit_credit","action","len","code_length","number_doc_len","week_days","identification_document","longitude","position","position_r","server_domain_name","extra_fields","properties","extra_properties","available","extra_fields_dependencies","caption","issue","invoice","closed","inventories","work_record","mandatory","value","fill_value","values","values_fields","address_fields","property_values","property_values_hierarchy","identifier","user_ib_uid","user_fresh_uid","meta_ids","hierarchical","group_hierarchy","moniker","predefined_name","moniker_r","ind","initiator","inn","comparison_types","integration_links_cache","couchdb_roles","obj_delivery_states","unload_type","caching_type","reduce_type","executors","executor","used","history","tags_category","category","key","parameters_keys","id","alpha2","alpha3","imns_code","okpo","quantity","notes","note","period_till","final_balance","contact_information","partner","partners","registers_correction","coefficient","multiplicity","settlements_multiplicity","course","settlements_course","currency_courses","brand","weight","manager","birth_place","multiline_mode","performance","set","destination","destinations","name","name_full","direction","sort_directions","flow_tunes","period_from","initial_balance","invalid","number_doc","row","account_number","phone_number","phone_without_codes","area","obj","acl_obj","acl_objs","volume","mandatory_fields","contents","definition","cause","cause_r","main_currency","main_presentation_name","selection","responsible","branch","canceled","sender","specify","offsets","patronymic","patronymic_r","param","params","choice_params","selection_params","period","periodicity","plan","planning","rotate","department","divisions","tooltip","has_owners","is_buyer","sex","full_moniker","full_name","label_positions","recipient","gender","users","_deleted","sorting","is_supplier","flow","flows","by_default","illustration","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","applying","parameters_keys_applying","forcibly","initiator_accepted","executor_accepted","priority","debit","posted","rate","others","delimiter","credit","extended_mode","region","field","sorting_field","fields","parent","property","links","choice_links","choice_type","trans","synonym","discount","hide","ancillary","event","content","conformity","state","obj_delivery_state","list","validity","quickly","ref","standard_period","start","articles","cost","country","countries","snils","string","amount","doc_amount","suffix","account_accounting","tabular_section","tabular_sections","tag","tags","txt_row","current_tasks","phone","phone_numbers","bank_phone_numbers","type","account_type","contact_information_types","event_types","task_events","account_types","goods","buisness_process_point","condition","services","surname","surname_r","individuals","individual_person","finish","formula","rating_formula","priority_formula","condition_formula","formulas","price","number","template","step","latitude","is_pieces","specimen","elm","elmnts","is_folder","is_extra_property","efficiency","legal_person","individual_legal"]});

(function(){
  const {MetaEventEmitter,EnumManager,CatManager,DocManager,DataProcessorsManager,ChartOfCharacteristicManager,ChartOfAccountManager,
    InfoRegManager,AccumRegManager,BusinessProcessManager,TaskManager,CatObj,DocObj,TabularSectionRow,DataProcessorObj,
    RegisterRow,BusinessProcessObj,TaskObj} = $p.constructor.classes;
    
  const _define = Object.defineProperties;

$p.enm.create('accumulation_record_type');
$p.enm.create('sort_directions');
$p.enm.create('comparison_types');
$p.enm.create('label_positions');
$p.enm.create('data_field_kinds');
$p.enm.create('standard_period');
$p.enm.create('quick_access');
$p.enm.create('report_output');
$p.enm.create('couchdb_roles');
$p.enm.create('periodicity');
$p.enm.create('gender');
$p.enm.create('task_events');

/**
* ### План видов характеристик ДополнительныеРеквизитыИСведения
* Дополнительные реквизиты и сведения
* @class CchProperties
* @extends CatObj
* @constructor 
*/
class CchProperties extends CatObj{
get shown(){return this._getter('shown')}
set shown(v){this._setter('shown',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get extra_values_owner(){return this._getter('extra_values_owner')}
set extra_values_owner(v){this._setter('extra_values_owner',v)}
get available(){return this._getter('available')}
set available(v){this._setter('available',v)}
get mandatory(){return this._getter('mandatory')}
set mandatory(v){this._setter('mandatory',v)}
get include_to_name(){return this._getter('include_to_name')}
set include_to_name(v){this._setter('include_to_name',v)}
get list(){return this._getter('list')}
set list(v){this._setter('list',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get destination(){return this._getter('destination')}
set destination(v){this._setter('destination',v)}
get tooltip(){return this._getter('tooltip')}
set tooltip(v){this._setter('tooltip',v)}
get caption(){return this._getter('caption')}
set caption(v){this._setter('caption',v)}
get is_extra_property(){return this._getter('is_extra_property')}
set is_extra_property(v){this._setter('is_extra_property',v)}
get include_to_description(){return this._getter('include_to_description')}
set include_to_description(v){this._setter('include_to_description',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
        set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}


  /**
   * ### Является ли значение параметра вычисляемым
   *
   * @property is_calculated
   * @type Boolean
   */
  get is_calculated() {
    return ($p.job_prm.properties.calculated || []).indexOf(this) != -1;
  }

  get show_calculated() {
    return ($p.job_prm.properties.show_calculated || []).indexOf(this) != -1;
  }

  /**
   * ### Рассчитывает значение вычисляемого параметра
   * @param obj {Object}
   * @param [obj.row]
   * @param [obj.elm]
   * @param [obj.ox]
   */
  calculated_value(obj) {
    if(!this._calculated_value) {
      if(this._formula) {
        this._calculated_value = $p.cat.formulas.get(this._formula);
      }
      else {
        return;
      }
    }
    return this._calculated_value.execute(obj);
  }

  /**
   * ### Проверяет условие в строке отбора
   */
  check_condition({row_spec, prm_row, elm, cnstr, origin, ox, calc_order}) {

    const {is_calculated} = this;
    const {utils, enm: {comparison_types}} = $p;

    // значение параметра
    const val = is_calculated ? this.calculated_value({
      row: row_spec,
      cnstr: cnstr || 0,
      elm,
      ox,
      calc_order
    }) : this.extract_value(prm_row);

    let ok = false;

    // если сравнение на равенство - решаем в лоб, если вычисляемый параметр типа массив - выясняем вхождение значения в параметр
    if(ox && !Array.isArray(val) && (prm_row.comparison_type.empty() || prm_row.comparison_type == comparison_types.eq)) {
      if(is_calculated) {
        ok = val == prm_row.value;
      }
      else {
        ox.params.find_rows({
          cnstr: cnstr || 0,
          inset: (typeof origin !== 'number' && origin) || utils.blank.guid,
          param: this,
          value: val
        }, () => {
          ok = true;
          return false;
        });
      }
    }
    // вычисляемый параметр - его значение уже рассчитано формулой (val) - сравниваем со значением в строке ограничений
    else if(is_calculated) {
      const value = this.extract_value(prm_row);
      ok = utils.check_compare(val, value, prm_row.comparison_type, comparison_types);
    }
    // параметр явно указан в табчасти параметров изделия
    else {
      ox.params.find_rows({
        cnstr: cnstr || 0,
        inset: (typeof origin !== 'number' && origin) || utils.blank.guid,
        param: this
      }, ({value}) => {
        // value - значение из строки параметра текущей продукции, val - знаяение из параметров отбора
        ok = utils.check_compare(value, val, prm_row.comparison_type, comparison_types);
        return false;
      });
    }
    return ok;
  }

  /**
   * Извлекает значение параметра с учетом вычисляемости
   */
  extract_value({comparison_type, txt_row, value}) {

    switch (comparison_type) {

    case $p.enm.comparison_types.in:
    case $p.enm.comparison_types.nin:

      if(!txt_row) {
        return value;
      }
      try {
        const arr = JSON.parse(txt_row);
        const {types} = this.type;
        if(types && types.length == 1) {
          const mgr = $p.md.mgr_by_class_name(types[0]);
          return arr.map((ref) => mgr.get(ref, false));
        }
        return arr;
      }
      catch (err) {
        return value;
      }

    default:
      return value;
    }
  }

  /**
   * Проверяет и при необходимости перезаполняет или устанваливает умолчание value в prow
   */
  linked_values(links, prow) {
    const values = [];
    let changed;
    // собираем все доступные значения в одном массиве
    links.forEach((link) => link.values.forEach((row) => values.push(row)));
    // если значение доступно в списке - спокойно уходим
    if(values.some((row) => row._obj.value == prow.value)) {
      return;
    }
    // если есть явный default - устанавливаем
    if(values.some((row) => {
      if(row.forcibly) {
        prow.value = row._obj.value;
        return true;
      }
      if(row.by_default && (!prow.value || prow.value.empty && prow.value.empty())) {
        prow.value = row._obj.value;
        changed = true;
      }
    })) {
      return true;
    }
    // если не нашли лучшего, установим первый попавшийся
    if(changed) {
      return true;
    }
    if(values.length) {
      prow.value = values[0]._obj.value;
      return true;
    }
  }
}
$p.CchProperties = CchProperties;
class CchPropertiesManager extends ChartOfCharacteristicManager {

  /**
   * ### Проверяет заполненность обязательных полей
   *
   * @method check_mandatory
   * @override
   * @param prms {Array}
   * @param title {String}
   * @return {Boolean}
   */
  check_mandatory(prms, title) {
    // проверяем заполненность полей
    for (const t in prms) {
      const row = prms[t];
      if(row.param.mandatory && (!row.value || row.value.empty())) {
        $p.msg.show_msg({
          type: 'alert-error',
          text: $p.msg.bld_empty_param + row.param.presentation,
          title: title || $p.msg.bld_title
        });
        return true;
      }
    }
  }

  /**
   * ### Возвращает массив доступных для данного свойства значений
   *
   * @method slist
   * @override
   * @param prop {CatObj} - планвидовхарактеристик ссылка или объект
   * @param ret_mgr {Object} - установить в этом объекте указатель на менеджера объекта
   * @return {Array}
   */
  slist(prop, ret_mgr) {

    var res = [], rt, at, pmgr, op = this.get(prop);

    if(op && op.type.is_ref) {
      // параметры получаем из локального кеша
      for (rt in op.type.types)
        if(op.type.types[rt].indexOf('.') > -1) {
          at = op.type.types[rt].split('.');
          pmgr = $p[at[0]][at[1]];
          if(pmgr) {

            if(ret_mgr) {
              ret_mgr.mgr = pmgr;
            }

            if(pmgr.class_name == 'enm.open_directions') {
              pmgr.get_option_list().forEach((v) => v.value && v.value != $p.enm.tso.folding && res.push(v));
            }
            else if(pmgr.class_name.indexOf('enm.') != -1 || !pmgr.metadata().has_owners) {
              res = pmgr.get_option_list();
            }
            else {
              pmgr.find_rows({owner: prop}, (v) => res.push({value: v.ref, text: v.presentation}));
            }
          }
        }
    }
    return res;
  }

}
$p.cch.create('properties', CchPropertiesManager, false);

/**
* ### План видов характеристик ПредопределенныеЭлементы
* Хранит значения настроек и параметров подсистем
* @class CchPredefined_elmnts
* @extends CatObj
* @constructor 
*/
class CchPredefined_elmnts extends CatObj{

  get value() {
    const {_obj, type, _manager} = this;
    const {utils} = _manager._owner.$p;
    const res = _obj ? _obj.value : '';

    if(_obj.is_folder) {
      return '';
    }
    if(typeof res == 'object') {
      return res;
    }
    else if(type.is_ref) {
      if(type.digits && typeof res === 'number') {
        return res;
      }
      if(type.hasOwnProperty('str_len') && !utils.is_guid(res)) {
        return res;
      }
      const mgr = _manager.value_mgr(_obj, 'value', type);
      if(mgr) {
        if(utils.is_data_mgr(mgr)) {
          return mgr.get(res, false);
        }
        else {
          return utils.fetch_type(res, mgr);
        }
      }
      if(res) {
        _manager._owner.$p.record_log(['value', type, _obj]);
        return null;
      }
    }
    else if(type.date_part) {
      return utils.fix_date(_obj.value, true);
    }
    else if(type.digits) {
      return utils.fix_number(_obj.value, !type.hasOwnProperty('str_len'));
    }
    else if(type.types[0] == 'boolean') {
      return utils.fix_boolean(_obj.value);
    }
    else {
      return _obj.value || '';
    }

    return this.characteristic.clr;
  }
  set value(v) {
    const {_obj, _data, _manager} = this;
    if(_obj.value !== v) {
      _manager.emit_async('update', this, {value: _obj.value});
      _obj.value = v.valueOf();
      _data._modified = true;
    }
  }
  get definition(){return this._getter('definition')}
  set definition(v){this._setter('definition',v)}
  get synonym(){return this._getter('synonym')}
  set synonym(v){this._setter('synonym',v)}
  get list(){return this._getter('list')}
  set list(v){this._setter('list',v)}
  get zone(){return this._getter('zone')}
  set zone(v){this._setter('zone',v)}
  get predefined_name(){return this._getter('predefined_name')}
  set predefined_name(v){this._setter('predefined_name',v)}
  get parent(){return this._getter('parent')}
  set parent(v){this._setter('parent',v)}
  get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
  set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
  get elmnts(){return this._getter_ts('elmnts')}
  set elmnts(v){this._setter_ts('elmnts',v)}}
$p.CchPredefined_elmnts = CchPredefined_elmnts;
class CchPredefined_elmntsElmntsRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CchPredefined_elmntsElmntsRow = CchPredefined_elmntsElmntsRow;
class CchPredefined_elmntsManager extends ChartOfCharacteristicManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    Object.defineProperty(this, 'parents', {
      value: {}
    });

    const {md, doc, adapters} = this._owner.$p;

    adapters.pouch.once('pouch_data_loaded', () => {
      // загружаем предопределенные элементы
      this.job_prms();
      // информируем мир о готовности констант
      md.emit('predefined_elmnts_inited');
      // излучаем событие "можно открывать формы"
      adapters.pouch.emit('pouch_complete_loaded');
    });
  }

  // этот метод адаптер вызывает перед загрузкой doc_ram
  job_prms() {

    // создаём константы из alatable
    this.forEach((row) => this.job_prm(row));

    // дополним автовычисляемыми свойствами
    // const {job_prm: {properties}} = this._owner.$p;
  }

  // создаёт константу
  job_prm(row) {
    const {job_prm, md, utils} = this._owner.$p;
    const {parents} = this;
    const parent = job_prm[parents[row.parent.valueOf()]];
    const _mgr = row.type.is_ref && md.mgr_by_class_name(row.type.types[0]);

    if(row.list == -1) {

      parent.__define(row.synonym, {
        value: (() => {
          const res = {};
          row.elmnts.forEach((row) => {
            res[row.elm] = _mgr ? _mgr.get(row.value, false, false) : row.value;
          });
          return res;
        })(),
        enumerable: true
      });

    }
    else if(row.list) {

      parent.__define(row.synonym, {
        value: (row.elmnts._obj || row.elmnts).map((row) => {
          if(_mgr) {
            const value = _mgr.get(row.value, false, false);
            if(!utils.is_empty_guid(row.elm)) {
              value._formula = row.elm;
            }
            return value;
          }
          else {
            return row.value;
          }
        }),
        enumerable: true
      });
    }
    else {

      if(parent.hasOwnProperty(row.synonym)) {
        delete parent[row.synonym];
      }

      parent.__define(row.synonym, {
        value: _mgr ? _mgr.get(row.value, false, false) : row.value,
        configurable: true,
        enumerable: true
      });
    }
  }

  // переопределяем load_array
  load_array(aattr, forse) {
    const {job_prm} = this._owner.$p;
    const {parents} = this;
    const elmnts = [];
    for (const row of aattr) {
      // если элемент является папкой, создаём раздел в job_prm
      if(row.is_folder && row.synonym) {
        parents[row.ref] = row.synonym;
        !job_prm[row.synonym] && job_prm.__define(row.synonym, {value: {}});
      }
      // если не задан синоним - пропускаем
      else if(row.synonym) {
        // если есть подходящая папка, стразу делаем константу
        if(parents[row.parent]) {
          !job_prm[parents[row.parent]][row.synonym] && this.job_prm(row);
        }
        // если папки нет - сохраним элемент в alatable
        else {
          elmnts.push(row);
        }
      }
    }
    // метод по умолчанию
    elmnts.length && super.load_array(elmnts, forse);
  }

}
$p.cch.create('predefined_elmnts', CchPredefined_elmntsManager, false);

/**
* ### Справочник Активность
* Виды активностей
* @class CatActivity
* @extends CatObj
* @constructor 
*/
class CatActivity extends CatObj{
get flow(){return this._getter('flow')}
set flow(v){this._setter('flow',v)}
get health(){return this._getter('health')}
set health(v){this._setter('health',v)}
get work(){return this._getter('work')}
set work(v){this._setter('work',v)}
get family(){return this._getter('family')}
set family(v){this._setter('family',v)}
get humanity(){return this._getter('humanity')}
set humanity(v){this._setter('humanity',v)}
get personal(){return this._getter('personal')}
set personal(v){this._setter('personal',v)}
get use(){return this._getter('use')}
set use(v){this._setter('use',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get plan(){return this._getter('plan')}
set plan(v){this._setter('plan',v)}
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatActivity = CatActivity;
$p.cat.create('activity');

/**
* ### Справочник ЗначенияСвойствОбъектов
* Дополнительные значения
* @class CatProperty_values
* @extends CatObj
* @constructor 
*/
class CatProperty_values extends CatObj{
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get full_name(){return this._getter('full_name')}
set full_name(v){this._setter('full_name',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatProperty_values = CatProperty_values;
$p.cat.create('property_values');

/**
* ### Справочник ИдентификаторыОбъектовМетаданных
* Идентификаторы объектов метаданных для использования в базе данных.
* @class CatMeta_ids
* @extends CatObj
* @constructor 
*/
class CatMeta_ids extends CatObj{
get full_moniker(){return this._getter('full_moniker')}
set full_moniker(v){this._setter('full_moniker',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatMeta_ids = CatMeta_ids;
$p.cat.create('meta_ids');

/**
* ### Справочник КатегорииТегов
* Категории тегов
* @class CatTags_category
* @extends CatObj
* @constructor 
*/
class CatTags_category extends CatObj{
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatTags_category = CatTags_category;
$p.cat.create('tags_category');

/**
* ### Справочник КлючиПараметров
* Списки пар {Параметр:Значение} для фильтрации в подсистемах формирования спецификаций, планировании и ценообразовании

* @class CatParameters_keys
* @extends CatObj
* @constructor 
*/
class CatParameters_keys extends CatObj{
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get applying(){return this._getter('applying')}
set applying(v){this._setter('applying',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}
}
$p.CatParameters_keys = CatParameters_keys;
class CatParameters_keysParamsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get comparison_type(){return this._getter('comparison_type')}
set comparison_type(v){this._setter('comparison_type',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatParameters_keysParamsRow = CatParameters_keysParamsRow;
$p.cat.create('parameters_keys');

/**
* ### Справочник Контрагенты
* Список юридических или физических лиц клиентов (поставщиков, покупателей).
* @class CatPartners
* @extends CatObj
* @constructor 
*/
class CatPartners extends CatObj{
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatPartners = CatPartners;
class CatPartnersExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatPartnersExtra_fieldsRow = CatPartnersExtra_fieldsRow;
$p.cat.create('partners');

/**
* ### Справочник НаборыДополнительныхРеквизитовИСведений
* Наборы дополнительных реквизитов и сведений
* @class CatDestinations
* @extends CatObj
* @constructor 
*/
class CatDestinations extends CatObj{
get used(){return this._getter('used')}
set used(v){this._setter('used',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get extra_properties(){return this._getter_ts('extra_properties')}
set extra_properties(v){this._setter_ts('extra_properties',v)}
}
$p.CatDestinations = CatDestinations;
class CatDestinationsExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_fieldsRow = CatDestinationsExtra_fieldsRow;
class CatDestinationsExtra_propertiesRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_propertiesRow = CatDestinationsExtra_propertiesRow;
$p.cat.create('destinations');

/**
* ### Справочник НастройкиПотоков
* Настройки потоков
* @class CatFlow_tunes
* @extends CatObj
* @constructor 
*/
class CatFlow_tunes extends CatObj{
get start_date(){return this._getter('start_date')}
set start_date(v){this._setter('start_date',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get flows(){return this._getter_ts('flows')}
set flows(v){this._setter_ts('flows',v)}
}
$p.CatFlow_tunes = CatFlow_tunes;
class CatFlow_tunesFlowsRow extends TabularSectionRow{
get flow(){return this._getter('flow')}
set flow(v){this._setter('flow',v)}
get rating_formula(){return this._getter('rating_formula')}
set rating_formula(v){this._setter('rating_formula',v)}
get priority_formula(){return this._getter('priority_formula')}
set priority_formula(v){this._setter('priority_formula',v)}
get rate(){return this._getter('rate')}
set rate(v){this._setter('rate',v)}
}
$p.CatFlow_tunesFlowsRow = CatFlow_tunesFlowsRow;
$p.cat.create('flow_tunes');

/**
* ### Справочник Оглавление
* Оглавление
* @class CatContents
* @extends CatObj
* @constructor 
*/
class CatContents extends CatObj{
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get published(){return this._getter('published')}
set published(v){this._setter('published',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get aliases(){return this._getter_ts('aliases')}
set aliases(v){this._setter_ts('aliases',v)}
}
$p.CatContents = CatContents;
class CatContentsAliasesRow extends TabularSectionRow{
get url(){return this._getter('url')}
set url(v){this._setter('url',v)}
}
$p.CatContentsAliasesRow = CatContentsAliasesRow;
$p.cat.create('contents');

/**
* ### Справочник Пользователи
* Пользователи
* @class CatUsers
* @extends CatObj
* @constructor 
*/
class CatUsers extends CatObj{

  get note(){return this._getter('note')}
  set note(v){this._setter('note',v)}
  get id(){return this._getter('id')}
  set id(v){/* this._setter('id',v) */}
  get prefix(){return this._getter('prefix')}
  set prefix(v){this._setter('prefix',v)}
  get branch(){return this._getter('branch')}
  set branch(v){this._setter('branch',v)}
  get push_only(){return this._getter('push_only')}
  set push_only(v){this._setter('push_only',v)}
  get subscription(){return this._getter('subscription')}
  set subscription(v){
    // запрос к superlogin на изменение профиля
    this._setter('subscription',v);
    $p.superlogin.change_subscription(v)
      .catch((err) => {
        $p.record_log(err);
      });
  }
  get suffix(){return this._getter('suffix')}
  set suffix(v){this._setter('suffix',v)}
  get direct(){return this._getter('direct')}
  set direct(v){this._setter('direct',v)}
  get sex(){return this._getter('sex')}
  set sex(v){this._setter('sex',v)}
  get email_addr(){return this._getter('email_addr')}
  set email_addr(v){this._setter('email_addr',v)}
  get predefined_name(){return this._getter('predefined_name')}
  set predefined_name(v){this._setter('predefined_name',v)}
  get extra_fields(){return this._getter_ts('extra_fields')}
  set extra_fields(v){this._setter_ts('extra_fields',v)}
  get acl_objs(){return this._getter_ts('acl_objs')}
  set acl_objs(v){this._setter_ts('acl_objs',v)}}
$p.CatUsers = CatUsers;
class CatUsersExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatUsersExtra_fieldsRow = CatUsersExtra_fieldsRow;
class CatUsersAcl_objsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatUsersAcl_objsRow = CatUsersAcl_objsRow;
class CatUsersManager extends CatManager {

  // при загрузке пользователей, морозим объект, чтобы его невозможно было изменить из интерфейса
  load_array(aattr, forse) {
    const res = [];
    for (let aobj of aattr) {
      if(!aobj.acl_objs) {
        aobj.acl_objs = [];
      }
      const {acl} = aobj;
      delete aobj.acl;
      let obj = this.by_ref[aobj.ref];
      if(obj) {
        Object.assign(obj._obj, aobj);
      }
      else {
        obj = new $p.CatUsers(aobj, this, true);
      }
      const {_obj} = obj;
      if(_obj && !_obj._acl) {
        _obj._acl = acl;
        obj._set_loaded();

        // Object.freeze(obj);
        // Object.freeze(_obj);
        // for (let j in _obj) {
        //   if(typeof _obj[j] == 'object') {
        //     Object.freeze(_obj[j]);
        //     for (let k in _obj[j]) {
        //       typeof _obj[j][k] == 'object' && Object.freeze(_obj[j][k]);
        //     }
        //   }
        // }
        res.push(obj);
      }
    }
    return res;
  }

  // пользователей не выгружаем
  unload_obj() {	}

}
$p.cat.create('users', CatUsersManager, false);

/**
* ### Справочник Потоки
* Потоки
* @class CatFlows
* @extends CatObj
* @constructor 
*/
class CatFlows extends CatObj{
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatFlows = CatFlows;
$p.cat.create('flows');

/**
* ### Справочник Статьи
* Основной объект CMS. Новости и файлы - это тоже статьи
* @class CatArticles
* @extends CatObj
* @constructor 
*/
class CatArticles extends CatObj{
get h1(){return this._getter('h1')}
set h1(v){this._setter('h1',v)}
get descr(){return this._getter('descr')}
set descr(v){this._setter('descr',v)}
get introduction(){return this._getter('introduction')}
set introduction(v){this._setter('introduction',v)}
get content(){return this._getter('content')}
set content(v){this._setter('content',v)}
get img(){return this._getter('img')}
set img(v){this._setter('img',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get author(){return this._getter('author')}
set author(v){this._setter('author',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get published(){return this._getter('published')}
set published(v){this._setter('published',v)}
get contents(){return this._getter('contents')}
set contents(v){this._setter('contents',v)}
get version_from(){return this._getter('version_from')}
set version_from(v){this._setter('version_from',v)}
get version_till(){return this._getter('version_till')}
set version_till(v){this._setter('version_till',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get tags(){return this._getter_ts('tags')}
set tags(v){this._setter_ts('tags',v)}
get acl(){return this._getter_ts('acl')}
set acl(v){this._setter_ts('acl',v)}
get aliases(){return this._getter_ts('aliases')}
set aliases(v){this._setter_ts('aliases',v)}
get acl_att(){return this._getter_ts('acl_att')}
set acl_att(v){this._setter_ts('acl_att',v)}
}
$p.CatArticles = CatArticles;
class CatArticlesTagsRow extends TabularSectionRow{
get tag(){return this._getter('tag')}
set tag(v){this._setter('tag',v)}
}
$p.CatArticlesTagsRow = CatArticlesTagsRow;
class CatArticlesAclRow extends TabularSectionRow{
get role(){return this._getter('role')}
set role(v){this._setter('role',v)}
get w(){return this._getter('w')}
set w(v){this._setter('w',v)}
}
$p.CatArticlesAclRow = CatArticlesAclRow;
class CatArticlesAliasesRow extends TabularSectionRow{
get url(){return this._getter('url')}
set url(v){this._setter('url',v)}
}
$p.CatArticlesAliasesRow = CatArticlesAliasesRow;
class CatArticlesAcl_attRow extends TabularSectionRow{
get name(){return this._getter('name')}
set name(v){this._setter('name',v)}
get role(){return this._getter('role')}
set role(v){this._setter('role',v)}
}
$p.CatArticlesAcl_attRow = CatArticlesAcl_attRow;
$p.cat.create('articles');

/**
* ### Справочник Теги
* Теги
* @class CatTags
* @extends CatObj
* @constructor 
*/
class CatTags extends CatObj{
get category(){return this._getter('category')}
set category(v){this._setter('category',v)}
get synonym(){return this._getter('synonym')}
set synonym(v){this._setter('synonym',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatTags = CatTags;
$p.cat.create('tags');

/**
* ### Справочник Формулы
* Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации
* @class CatFormulas
* @extends CatObj
* @constructor 
*/
class CatFormulas extends CatObj{
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get leading_formula(){return this._getter('leading_formula')}
set leading_formula(v){this._setter('leading_formula',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get async(){return this._getter('async')}
set async(v){this._setter('async',v)}
get disabled(){return this._getter('disabled')}
set disabled(v){this._setter('disabled',v)}
get zone(){return this._getter('zone')}
set zone(v){this._setter('zone',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}


  execute(obj, attr) {

    const {_manager, _data} = this;
    const {$p} = _manager._owner;

    // создаём функцию из текста формулы
    if(!_data._formula && this.formula){
      try{
        if(this.async){
          const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
          _data._formula = (new AsyncFunction("obj,$p,attr", this.formula)).bind(this);
        }
        else{
          _data._formula = (new Function("obj,$p,attr", this.formula)).bind(this);
        }
      }
      catch(err){
        _data._formula = () => false;
        $p.record_log(err);
      }
    }

    const {_formula} = _data;

    if(this.parent == _manager.predefined("printing_plates")){

      if(!_formula){
        $p.msg.show_msg({
          title: $p.msg.bld_title,
          type: "alert-error",
          text: `Ошибка в формуле<br /><b>${this.name}</b>`
        });
        return Promise.resolve();
      }

      // получаем HTMLDivElement с отчетом
      return _formula(obj, $p, attr)

      // показываем отчет в отдельном окне
        .then((doc) => doc instanceof $p.SpreadsheetDocument && doc.print());

    }
    else{
      return _formula && _formula(obj, $p, attr)
    }

  }

  get _template() {
    const {_data} = this;
    if(!_data._template){
      _data._template = new this._manager._owner.$p.SpreadsheetDocument(this.template);
    }
    return _data._template;
  }
}
$p.CatFormulas = CatFormulas;
class CatFormulasParamsRow extends TabularSectionRow{
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CatFormulasParamsRow = CatFormulasParamsRow;
class CatFormulasManager extends CatManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    this._owner.$p.adapters.pouch.once('pouch_data_loaded', () => this.load_formulas());
  }

  load_formulas() {
    const {md} = this._owner.$p;
    const parents = [this.predefined('printing_plates'), this.predefined('modifiers')];
    const filtered = [];
    this.forEach((v) => {
      !v.disabled && parents.indexOf(v.parent) !== -1 && filtered.push(v)
    });
    filtered.sort((a, b) => a.sorting_field - b.sorting_field).forEach((formula) => {
      // формируем списки печатных форм и внешних обработок
      if(formula.parent == parents[0]) {
        formula.params.find_rows({param: 'destination'}, (dest) => {
          const dmgr = md.mgr_by_class_name(dest.value);
          if(dmgr) {
            if(!dmgr._printing_plates) {
              dmgr._printing_plates = {};
            }
            dmgr._printing_plates[`prn_${formula.ref}`] = formula;
          }
        });
      }
      else {
        // выполняем модификаторы
        try {
          formula.execute();
        }
        catch (err) {
        }
      }
    });
  }

  // переопределяем load_array - не грузим неактивные формулы
  load_array(aattr, forse) {
    super.load_array(aattr.filter((v) => {
      return !v.disabled || v.is_folder;
    }), forse);
  }

}
$p.cat.create('formulas', CatFormulasManager, false);

/**
* ### Документ Активность
* Активность
* @class DocActivity
* @extends DocObj
* @constructor 
*/
class DocActivity extends DocObj{
get activity(){return this._getter('activity')}
set activity(v){this._setter('activity',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.DocActivity = DocActivity;
$p.doc.create('activity');

/**
* ### Документ Задача
* Задача
* @class DocIssue
* @extends DocObj
* @constructor 
*/
class DocIssue extends DocObj{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get caption(){return this._getter('caption')}
set caption(v){this._setter('caption',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get initiator(){return this._getter('initiator')}
set initiator(v){this._setter('initiator',v)}
get mark(){return this._getter('mark')}
set mark(v){this._setter('mark',v)}
get executor(){return this._getter('executor')}
set executor(v){this._setter('executor',v)}
get quickly(){return this._getter('quickly')}
set quickly(v){this._setter('quickly',v)}
get important(){return this._getter('important')}
set important(v){this._setter('important',v)}
get executor_accepted(){return this._getter('executor_accepted')}
set executor_accepted(v){this._setter('executor_accepted',v)}
get specify(){return this._getter('specify')}
set specify(v){this._setter('specify',v)}
get canceled(){return this._getter('canceled')}
set canceled(v){this._setter('canceled',v)}
get completed(){return this._getter('completed')}
set completed(v){this._setter('completed',v)}
get initiator_accepted(){return this._getter('initiator_accepted')}
set initiator_accepted(v){this._setter('initiator_accepted',v)}
get state_date(){return this._getter('state_date')}
set state_date(v){this._setter('state_date',v)}
get tags(){return this._getter_ts('tags')}
set tags(v){this._setter_ts('tags',v)}
get notes(){return this._getter_ts('notes')}
set notes(v){this._setter_ts('notes',v)}
get history(){return this._getter_ts('history')}
set history(v){this._setter_ts('history',v)}
get flows(){return this._getter_ts('flows')}
set flows(v){this._setter_ts('flows',v)}
}
$p.DocIssue = DocIssue;
class DocIssueTagsRow extends TabularSectionRow{
get tag(){return this._getter('tag')}
set tag(v){this._setter('tag',v)}
}
$p.DocIssueTagsRow = DocIssueTagsRow;
class DocIssueNotesRow extends TabularSectionRow{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get author(){return this._getter('author')}
set author(v){this._setter('author',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
}
$p.DocIssueNotesRow = DocIssueNotesRow;
class DocIssueHistoryRow extends TabularSectionRow{
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get event(){return this._getter('event')}
set event(v){this._setter('event',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.DocIssueHistoryRow = DocIssueHistoryRow;
class DocIssueFlowsRow extends TabularSectionRow{
get flow(){return this._getter('flow')}
set flow(v){this._setter('flow',v)}
get rate(){return this._getter('rate')}
set rate(v){this._setter('rate',v)}
}
$p.DocIssueFlowsRow = DocIssueFlowsRow;
class DocIssueManager extends DocManager {

}
$p.doc.create('issue', DocIssueManager, false);

/**
* ### Регистр сведений log_view
* Просмотр журнала событий
* @class IregLog_view
* @extends RegisterRow
* @constructor 
*/
class IregLog_view extends RegisterRow{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get user(){return this._getter('user')}
set user(v){this._setter('user',v)}
}
$p.IregLog_view = IregLog_view;
$p.ireg.create('log_view');

/**
* ### Отчет ТекущиеЗадачи
* Текущие задачи
* @class RepCurrent_tasks
* @extends DataProcessorObj
* @constructor 
*/
class RepCurrent_tasks extends DataProcessorObj{
}
$p.RepCurrent_tasks = RepCurrent_tasks;
$p.rep.create('current_tasks');

/**
* ### Отчет Эффективность
* Эффективность
* @class RepEfficiency
* @extends DataProcessorObj
* @constructor 
*/
class RepEfficiency extends DataProcessorObj{
}
$p.RepEfficiency = RepEfficiency;
$p.rep.create('efficiency');
})();
};